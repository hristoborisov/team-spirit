import { Injectable } from '@angular/core';
import { EverliveProvider } from './everlive-provider.service';
import { Users } from '../../node_modules/everlive-sdk/dist/declarations/everlive/types/Users';
import { User } from '../shared'
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
    private _users: Users;

    constructor(
        private _everliveProvider: EverliveProvider
    ) {
        this._users = this._everliveProvider.get.users;
    }

    login(username: string, password: string) {
        return this._users.login(username, password);
    }

    register(username: string, password: string) {
        return this._users.register(username, password, null);
    }

    currentUser() {
        return new Promise<User>((resolve, reject) => {
            this._users.currentUser().then(u => {
                return resolve(new User(
                    u.result.Id,
                    u.result.Username,
                    u.result.DisplayName,
                    u.result.Email,
                    '' //TODO:
                ));
            }).catch(reject);
        });
    }

    loggedIn(): Observable<boolean> {
        const promise = new Promise<boolean>(resolve => {
            return this._users.currentUser().then(u => resolve(!!u)).catch(() => resolve(false));
        });

        return Observable.fromPromise(promise);
    }

    updateUser(user: User) {
        return this._users.update(user, {Username: user.Username})
    }

    logout() {
        return this._users.logout().then(r => r, e => e);
    }
}