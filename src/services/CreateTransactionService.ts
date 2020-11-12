import { getCustomRepository, getRepository } from 'typeorm';
// import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Category from '../models/Category';

interface Request {
  id: string;
  title: string;
  type: 'income' | 'outcome';
  category: Category;
  value: number;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category
  }: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionsRepository);

    const findCategory = await transactionRepository.findOne({
      where: { category },
    });
    const categoryRepository = getRepository(Category);

    if (!findCategory) {
      categoryRepository.
      const newCategory = categoryRepository.create({
        title: category,
      });

      await categoryRepository.save(newCategory);
    }else{
      const presentCategory = categoryRepository.getId({ where: { category }})
    }


    transactionRepository.create({})
  }
}

export default CreateTransactionService;
