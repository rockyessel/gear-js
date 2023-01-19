import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Meta } from '../database/entities';

@Injectable()
export class MetaRepo {
  constructor(
    @InjectRepository(Meta)
    private metaRepo: Repository<Meta>,
  ) {}

  public async getByCodeId(codeId: string): Promise<Meta> {
    return this.metaRepo.findOne({
      where: { code: { id: codeId } }
    });
  }

  public async save(metadata: Meta): Promise<Meta> {
    return this.metaRepo.save(metadata);
  }
}