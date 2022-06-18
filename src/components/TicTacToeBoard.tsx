import React from 'react';

export const TicTacToeBoard = () => {


    return (
        <div class="container">
            <div class="row-6 m-auto">
                <h1>Tic Tac Toe</h1>
            </div>
            <div class="row">
                <div class="col col-6 m-auto rounded bg-danger justify-content-right">
                    <div class="row m-2 p-2">
                        <div class="col border rounded border-2 m-2 p-3">
                            x
                        </div>
                        <div class="col border rounded border-2 m-2 p-3">
                            x
                        </div>
                        <div class="col border rounded border-2 m-2 p-3">
                            x
                        </div>
                    </div>
                    <div class="row m-2 p-2">
                    <div class="col border rounded border-2 m-2 p-3">
                            x
                        </div>
                        <div class="col border rounded border-2 m-2 p-3">
                            x
                        </div>
                        <div class="col border rounded border-2 m-2 p-3">
                            x
                        </div>
                    </div>
                    <div class="row m-2 p-2">
                    <div class="col border rounded border-2 m-2 p-3">
                            x
                        </div>
                        <div class="col border rounded border-2 m-2 p-3">
                            x
                        </div>
                        <div class="col border rounded border-2 m-2 p-3">
                            x
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}