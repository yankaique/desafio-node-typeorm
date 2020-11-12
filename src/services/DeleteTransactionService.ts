import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';
import { getCustomRepository } from 'typeorm';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsRepository.findOne(id);

    if(!transaction){
      throw new AppError('Transaction is not exist');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
