const defaults = require('./defaults');
const CleverBuffer = require('./clever-buffer-common');

class CleverBufferWriter extends CleverBuffer {

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

    writeDouble8(value, offset) {
        return (this.bigEndian ? this.writeDouble8BE : this.writeDouble8LE).call(this, value, offset);
    }

    writeDouble8BE(value, offset) {
        return this._executeWriteAndIncrement(1, Buffer.prototype.writeDouble8BE, value, offset);
    };

    writeDouble8LE(value, offset) {
        return this._executeWriteAndIncrement(1, Buffer.prototype.writeDouble8LE, value, offset);
    };

    writeFloat4(value, offset) {
        return (this.bigEndian ? this.writeFloat4BE : this.writeFloat4LE).call(this, value, offset);
    }

    writeFloat4BE(value, offset) {
        return this._executeWriteAndIncrement(0.5, Buffer.prototype.writeFloat4BE, value, offset);
    };

    writeFloat4LE(value, offset) {
        return this._executeWriteAndIncrement(0.5, Buffer.prototype.writeFloat4LE, value, offset);
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
