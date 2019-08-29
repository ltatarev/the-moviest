export class Token {
    static parse(token: string): any {
        let payload: any;
        let data: any;
        data = token.split(".")[1];
        data = window.atob(data);
        payload = JSON.parse(data);
        return payload;
    }

    static save(token: string): void {
        window.localStorage['the-moviest'] = token;
    }

    static get(): string {
        return window.localStorage['the-moviest'];
    }

    static remove(): void {
        window.localStorage.removeItem('the-moviest');
    }
}
