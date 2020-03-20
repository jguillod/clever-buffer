const defaults = require('./defaults');
const CleverBuffer = require('./clever-buffer-common');

/**
 * @class
 * @param {Buffer} buffer data buffer to read from
 * @param {object} [options]
 * @param {number} [options.offset=0]
 * @param {number} [options.bigEndian=false]
 */
class CleverBufferReader extends CleverBuffer {

    constructor(buffer, options = {}) {
        super(buffer, options);
        // this.getUInt8 = this.getUInt8.bind(this);
        // this.getInt8 = this.getInt8.bind(this);
        // this.getUInt16 = this.getUInt16.bind(this);
        // this.getInt16 = this.getInt16.bind(this);
        // this.getUInt32 = this.getUInt32.bind(this);
        // this.getInt32 = this.getInt32.bind(this);
        // this.getBigUInt64 = this.getBigUInt64.bind(this);
        // this.getBigInt64 = this.getBigInt64.bind(this);
        // this.getString = this.getString.bind(this);
        // this.getBytes = this.getBytes.bind(this);
        // if (options == null) {
        //     options = {};
        // }
    }

    getString(options = {}) {
        const offsetSpecified = (options.offset != null);
        const {length, offset, encoding} = defaults(options, {
                length: 0,
                offset: this.offset,
                encoding: 'utf-8'
            }
        );
        if (length === 0) {
            return '';
        }
        const val = this.buffer.toString(encoding, offset, offset + length);
        if (!offsetSpecified) {
            this.offset += length;
        }
        return val;
    }

    getBytes(options = {}) {
        const offsetSpecified = (options.offset != null);
        const {length, offset} = defaults(options, {
                length: 0,
                offset: this.offset
            }
        );
        if (length === 0) {
            return [];
        }
        const val = Array.prototype.slice.call(this.buffer, offset, offset + length);
        if (!offsetSpecified) {
            this.offset += length;
        }
        return val;
    }

    /* ---------------- BEGIN OF AUTO-GENERATED CODE -------------------- */
    getBigInt64(...args) {
        return this.readBigInt64(...args);
    }

    getBigUInt64(...args) {
        return this.readBigUInt64(...args);
    }

    getDouble(...args) {
        return this.readDouble(...args);
    }

    getFloat(...args) {
        return this.readFloat(...args);
    }

    getInt16(...args) {
        return this.readInt16(...args);
    }

    getInt32(...args) {
        return this.readInt32(...args);
    }

    getInt(...args) {
        return this.readInt(...args);
    }

    getInt8(...args) {
        return this.readInt8(...args);
    }

    getUInt16(...args) {
        return this.readUInt16(...args);
    }

    getUInt32(...args) {
        return this.readUInt32(...args);
    }

    getUInt8(...args) {
        return this.readUInt8(...args);
    }

    getUInt(...args) {
        return this.readUInt(...args);
    }

    readBigInt64(offset) {
        return (this.bigEndian ? this.readBigInt64BE : this.readBigInt64LE).call(this, offset);
    }

    readBigInt64BE(offset) {
        return this._executeReadAndIncrement(8, Buffer.prototype.readBigInt64BE, offset);
    };

    readBigInt64LE(offset) {
        return this._executeReadAndIncrement(8, Buffer.prototype.readBigInt64LE, offset);
    };

    readBigUInt64(offset) {
        return (this.bigEndian ? this.readBigUInt64BE : this.readBigUInt64LE).call(this, offset);
    }

    readBigUInt64BE(offset) {
        return this._executeReadAndIncrement(8, Buffer.prototype.readBigUInt64BE, offset);
    };

    readBigUInt64LE(offset) {
        return this._executeReadAndIncrement(8, Buffer.prototype.readBigUInt64LE, offset);
    };

    readDouble(offset) {
        return (this.bigEndian ? this.readDoubleBE : this.readDoubleLE).call(this, offset);
    }

    readDoubleBE(offset) {
        return this._executeReadAndIncrement(1, Buffer.prototype.readDoubleBE, offset);
    };

    readDoubleLE(offset) {
        return this._executeReadAndIncrement(1, Buffer.prototype.readDoubleLE, offset);
    };

    readFloat(offset) {
        return (this.bigEndian ? this.readFloatBE : this.readFloatLE).call(this, offset);
    }

    readFloatBE(offset) {
        return this._executeReadAndIncrement(0.5, Buffer.prototype.readFloatBE, offset);
    };

    readFloatLE(offset) {
        return this._executeReadAndIncrement(0.5, Buffer.prototype.readFloatLE, offset);
    };

    readInt16(offset) {
        return (this.bigEndian ? this.readInt16BE : this.readInt16LE).call(this, offset);
    }

    readInt16BE(offset) {
        return this._executeReadAndIncrement(2, Buffer.prototype.readInt16BE, offset);
    };

    readInt16LE(offset) {
        return this._executeReadAndIncrement(2, Buffer.prototype.readInt16LE, offset);
    };

    readInt32(offset) {
        return (this.bigEndian ? this.readInt32BE : this.readInt32LE).call(this, offset);
    }

    readInt32BE(offset) {
        return this._executeReadAndIncrement(4, Buffer.prototype.readInt32BE, offset);
    };

    readInt32LE(offset) {
        return this._executeReadAndIncrement(4, Buffer.prototype.readInt32LE, offset);
    };

    readInt(offset, byteLength) {
        return (this.bigEndian ? this.readIntBE : this.readIntLE).call(this, offset, byteLength);
    }

    readIntBE(offset, byteLength) {
        return this._executeReadAndIncrement(byteLength, Buffer.prototype.readIntBE, offset, byteLength);
    };

    readIntLE(offset, byteLength) {
        return this._executeReadAndIncrement(byteLength, Buffer.prototype.readIntLE, offset, byteLength);
    };

    readInt8(offset) {
        return this._executeReadAndIncrement(1, Buffer.prototype.readInt8, offset);
    };

    readUInt16(offset) {
        return (this.bigEndian ? this.readUInt16BE : this.readUInt16LE).call(this, offset);
    }

    readUInt16BE(offset) {
        return this._executeReadAndIncrement(2, Buffer.prototype.readUInt16BE, offset);
    };

    readUInt16LE(offset) {
        return this._executeReadAndIncrement(2, Buffer.prototype.readUInt16LE, offset);
    };

    readUInt32(offset) {
        return (this.bigEndian ? this.readUInt32BE : this.readUInt32LE).call(this, offset);
    }

    readUInt32BE(offset) {
        return this._executeReadAndIncrement(4, Buffer.prototype.readUInt32BE, offset);
    };

    readUInt32LE(offset) {
        return this._executeReadAndIncrement(4, Buffer.prototype.readUInt32LE, offset);
    };

    readUInt8(offset) {
        return this._executeReadAndIncrement(1, Buffer.prototype.readUInt8, offset);
    };

    readUInt(offset, byteLength) {
        return (this.bigEndian ? this.readUIntBE : this.readUIntLE).call(this, offset, byteLength);
    }

    readUIntBE(offset, byteLength) {
        return this._executeReadAndIncrement(byteLength, Buffer.prototype.readUIntBE, offset, byteLength);
    };

    readUIntLE(offset, byteLength) {
        return this._executeReadAndIncrement(byteLength, Buffer.prototype.readUIntLE, offset, byteLength);
    };

    /* ---------------- END OF AUTO-GENERATED CODE -------------------- */

}

module.exports = CleverBufferReader;
