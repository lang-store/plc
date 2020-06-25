import React from 'react';

type Unpromised<T> = T extends Promise<infer R> ? R : T;

export class Blizzard {

    private _show: boolean;
    private numberOfBlizzard: number = 0;

    readonly ref: React.RefObject<HTMLDivElement> = React.createRef();

    get show(): boolean {
        return this._show;
    }

    set show(newValue: boolean) {
        this._show = newValue;
    }

    doInBackground<T extends (...args: any[]) => any, TRet = Unpromised<ReturnType<T>>>(targetFunc: T) {
        return async (...args: Parameters<T>): Promise<TRet> => {
            this.numberOfBlizzard++;
            this.showSpinner(true);

            try {
                const response = await targetFunc(...args);
                return response;

            } catch (error) {
                throw error;
            } finally {
                this.numberOfBlizzard--;

                if (!this.numberOfBlizzard) {
                    this.showSpinner(false);
                }
            }

        };
    }

    showSpinner = (show: boolean) => {
        if (!this.ref.current) {
            return;
        }

        this.show = show;

        if (this.show) {
            this.ref.current.style.visibility = `visible`;
        } else {
            this.ref.current.style.visibility = `hidden`;
        }
    }

}
