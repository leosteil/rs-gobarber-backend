import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUserRepository';

interface Request {
    user_id: string;
}

@injectable()
class ShowProfileService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async execute({ user_id }: Request): Promise<User> {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found');
        }

        return this.usersRepository.save(user);
    }
}

export default ShowProfileService;
