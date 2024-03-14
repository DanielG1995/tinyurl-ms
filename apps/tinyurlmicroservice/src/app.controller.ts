import { SHA256 } from 'crypto-js';
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';


@Controller()
export class AppController {
  @MessagePattern({ action: 'new_url' })
  async createShortUrl(longUrl: string) {
    const hash = SHA256(longUrl);
    // Se convierte el hash a formato hexadecimal
    const hashHex = hash.toString();
    // Se toma una parte del hash para crear la URL corta
    const urlCorta = hashHex.substring(0, 10); // Ajustar longitud de la URL corta si es necesario
    return urlCorta;

  }
}