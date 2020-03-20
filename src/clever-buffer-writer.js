const defaults = require('./defaults');
const CleverBufferReader = require('./clever-buffer-reader');

class CleverBufferWriter extends CleverBufferReader {

    constructor(buffer, options = {}) {
        super(buffer, options);
    }

    /**
     *
     * @param {string} value value to write
     * @param {object} [options]
     * @param {object} [options.length] number of bytes to write (byte length ≠ char length depending on encoding)
     * @param {object} [options.offset] Number of bytes to skip before starting to write string.
     * @param {object} [options.encoding=utf8] The character encoding of string
     * @return {CleverBufferWriter}
     */
    writeString(value, options = {}) {
        // return this.writeBytes(Buffer.from(value, options.encoding || 'utf8'), options);
        const offsetSpecified = (options.offset != null);
        let {length, offset, encoding} = defaults(options, {
                length: null,
                offset: this.offset,
                encoding: 'utf8'
            }
        );
        let maxlen = Buffer.from(value, encoding).length;
        length = Math.min(length || maxlen, maxlen);
        this._checkAllocBuffer(offset, length);
        length = this.buffer.write(value, offset, length, encoding);
        if (!offsetSpecified) {
            this.offset += length;
        }
        return this;
    }

    /**
     *
     * @param value
     * @param {object} [options]
     * @param {object} [options.length] number of bytes to write (byte length ≠ char length depending on encoding)
     * @param {object} [options.offset] Number of bytes to skip before starting to write string.
     * @return {CleverBufferWriter}
     */
    writeBytes(value, options = {}) {
        const offsetSpecified = (options.offset != null);
        let {length, offset} = defaults(options, {
                length: null,
                offset: this.offset
            }
        );
        if (!(value instanceof Buffer)) value = Buffer.from(value);
        length = Math.min(value.length, length || value.length);
        this._checkAllocBuffer(offset, value.length);
        length = value.copy(this.buffer, offset, 0, length);
        if (!offsetSpecified) {
            this.offset += length;
        }
        return this;
    }

    /* ---------------- BEGIN OF AUTO-GENERATED CODE -------------------- */

    setBigInt64(...args) {
        return this.writeBigInt64(...args);
    }

    setBigUInt64(...args) {
        return this.writeBigUInt64(...args);
    }

    setDouble(...args) {
        return this.writeDouble(...args);
    }

    setFloat(...args) {
        return this.writeFloat(...args);
    }

    setInt16(...args) {
        return this.writeInt16(...args);
    }

    setInt32(...args) {
        return this.writeInt32(...args);
    }

    setInt8(...args) {
        return this.writeInt8(...args);
    }

    setInt(...args) {
        return this.writeInt(...args);
    }

    setUInt16(...args) {
        return this.writeUInt16(...args);
    }

    setUInt32(...args) {
        return this.writeUInt32(...args);
    }

    setUInt8(...args) {
        return this.writeUInt8(...args);
    }

    setUInt(...args) {
        return this.writeUInt(...args);
    }

    writeBigInt64(value, offset) {
        return (this.bigEndian ? this.writeBigInt64BE : this.writeBigInt64LE).call(this, value, offset);
    }

    writeBigInt64BE(value, offset) {
        return this._executeWriteAndIncrement(8, Buffer.prototype.writeBigInt64BE, value, offset);
    };

    writeBigInt64LE(value, offset) {
        return this._executeWriteAndIncrement(8, Buffer.prototype.writeBigInt64LE, value, offset);
    };

    writeBigUInt64(value, offset) {
        return (this.bigEndian ? this.writeBigUInt64BE : this.writeBigUInt64LE).call(this, value, offset);
    }

    writeBigUInt64BE(value, offset) {
        return this._executeWriteAndIncrement(8, Buffer.prototype.writeBigUInt64BE, value, offset);
    };

    writeBigUInt64LE(value, offset) {
        return this._executeWriteAndIncrement(8, Buffer.prototype.writeBigUInt64LE, value, offset);
    };

    writeDouble(value, offset) {
        return (this.bigEndian ? this.writeDoubleBE : this.writeDoubleLE).call(this, value, offset);
    }

    writeDoubleBE(value, offset) {
        return this._executeWriteAndIncrement(1, Buffer.prototype.writeDoubleBE, value, offset);
    };

    writeDoubleLE(value, offset) {
        return this._executeWriteAndIncrement(1, Buffer.prototype.writeDoubleLE, value, offset);
    };

    writeFloat(value, offset) {
        return (this.bigEndian ? this.writeFloatBE : this.writeFloatLE).call(this, value, offset);
    }

    writeFloatBE(value, offset) {
        return this._executeWriteAndIncrement(0.5, Buffer.prototype.writeFloatBE, value, offset);
    };

    writeFloatLE(value, offset) {
        return this._executeWriteAndIncrement(0.5, Buffer.prototype.writeFloatLE, value, offset);
    };

    writeInt16(value, offset) {
        return (this.bigEndian ? this.writeInt16BE : this.writeInt16LE).call(this, value, offset);
    }

    writeInt16BE(value, offset) {
        return this._executeWriteAndIncrement(2, Buffer.prototype.writeInt16BE, value, offset);
    };

    writeInt16LE(value, offset) {
        return this._executeWriteAndIncrement(2, Buffer.prototype.writeInt16LE, value, offset);
    };

    writeInt32(value, offset) {
        return (this.bigEndian ? this.writeInt32BE : this.writeInt32LE).call(this, value, offset);
    }

    writeInt32BE(value, offset) {
        return this._executeWriteAndIncrement(4, Buffer.prototype.writeInt32BE, value, offset);
    };

    writeInt32LE(value, offset) {
        return this._executeWriteAndIncrement(4, Buffer.prototype.writeInt32LE, value, offset);
    };

    writeInt8(value, offset) {
        return this._executeWriteAndIncrement(1, Buffer.prototype.writeInt8, value, offset);
    };

    writeInt(value, offset, byteLength) {
        return (this.bigEndian ? this.writeIntBE : this.writeIntLE).call(this, value, offset, byteLength);
    }

    writeIntBE(value, offset, byteLength) {
        return this._executeWriteAndIncrement(byteLength, Buffer.prototype.writeIntBE, value, offset, byteLength);
    };

    writeIntLE(value, offset, byteLength) {
        return this._executeWriteAndIncrement(byteLength, Buffer.prototype.writeIntLE, value, offset, byteLength);
    };

    writeUInt16(value, offset) {
        return (this.bigEndian ? this.writeUInt16BE : this.writeUInt16LE).call(this, value, offset);
    }

    writeUInt16BE(value, offset) {
        return this._executeWriteAndIncrement(2, Buffer.prototype.writeUInt16BE, value, offset);
    };

    writeUInt16LE(value, offset) {
        return this._executeWriteAndIncrement(2, Buffer.prototype.writeUInt16LE, value, offset);
    };

    writeUInt32(value, offset) {
        return (this.bigEndian ? this.writeUInt32BE : this.writeUInt32LE).call(this, value, offset);
    }

    writeUInt32BE(value, offset) {
        return this._executeWriteAndIncrement(4, Buffer.prototype.writeUInt32BE, value, offset);
    };

    writeUInt32LE(value, offset) {
        return this._executeWriteAndIncrement(4, Buffer.prototype.writeUInt32LE, value, offset);
    };

    writeUInt8(value, offset) {
        return this._executeWriteAndIncrement(1, Buffer.prototype.writeUInt8, value, offset);
    };

    writeUInt(value, offset, byteLength) {
        return (this.bigEndian ? this.writeUIntBE : this.writeUIntLE).call(this, value, offset, byteLength);
    }

    writeUIntBE(value, offset, byteLength) {
        return this._executeWriteAndIncrement(byteLength, Buffer.prototype.writeUIntBE, value, offset, byteLength);
    };

    writeUIntLE(value, offset, byteLength) {
        return this._executeWriteAndIncrement(byteLength, Buffer.prototype.writeUIntLE, value, offset, byteLength);
    };

    /* ---------------- END OF AUTO-GENERATED CODE -------------------- */

}

module.exports = CleverBufferWriter;
