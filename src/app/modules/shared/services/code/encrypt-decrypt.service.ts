import { Injectable } from '@angular/core';

import { AES_CONFIG } from '@shared/config/secrets';

import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {

  constructor() { }

  /**
   *
   *
   * Encript información
   */
   encryptData ( data : string | number | object | boolean ) : string {

    const key = enc.Utf8.parse(AES_CONFIG.KEY); // Use Utf8-Encoder.
    const iv = enc.Utf8.parse(AES_CONFIG.SECRET);

    if ( typeof data === 'object' )
      data = JSON.stringify(data);

    data = data.toString();
    return AES.encrypt( data, key , { iv: iv } ).toString() ?? '';
  }

  /**
   *
   *
   * Encript información
   */
  decryptData ( data : string  ) : string {
    const key = enc.Utf8.parse(AES_CONFIG.KEY); // Use Utf8-Encoder.
    const iv = enc.Utf8.parse(AES_CONFIG.SECRET);

    return AES.decrypt( data, key, { iv }  ).toString(enc.Utf8) ?? '';
  }

}
