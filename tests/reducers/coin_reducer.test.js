import coinReducer from '../../src/reducers/coin_reducer';
import * as types from '../../src/actions/types';

describe('Coin Reducer', () => {
    
    test('should return the initial state', () => {
        expect(coinReducer(undefined, {})).toEqual(
            {
                coins: [],
                addedCoins: [],
                totalAmountOwnedUSD: 0
            }
        );
    });

    describe('TOTAL_AMOUNT_OWNED action type', () => {
        
        const initialState = {
            coins: [],
            addedCoins: [],
            totalAmountOwnedUSD: 1000
        };

        test('should update totalAmountOwnedUSD to correct value', () => {
            expect(
                coinReducer(
                    {
                        coins: [],
                        addedCoins: [],
                        totalAmountOwnedUSD: 500
                    },
                     {
                         type: types.TOTAL_AMOUNT_OWNED,
                         payload: {previousValue: 100, updatedValue: 300}
                     }
                )
            ).toEqual({
                coins: [],
                addedCoins: [],
                totalAmountOwnedUSD: 700
            })
        });



    });

    describe('ADD_COINS action type', () => {
           const initialState = { 
                coins:[
                    {id: 'bitcoin', name: 'Bitcoin', price_usd: '2000'},
                    {id: 'ethereum', name:'Ethereum', price_usd: '300'}
                ], 
                addedCoins:[] 
            };
        test('should add one coin to addedCoins state of 0 added coins', () => {
            expect(
                coinReducer(
                    { 
                        coins:[
                            {id: 'bitcoin', name: 'Bitcoin', price_usd: '2000'},
                            {id: 'ethereum', name:'Ethereum', price_usd: '300'}
                        ], 
                        addedCoins:[] 
                    }, 
                    {
                        type: types.ADD_COINS, 
                        payload: ['bitcoin']
                    }
                )
            ).toEqual(
                {
                    coins: [{id: 'ethereum', name:'Ethereum', price_usd: '300'}],
                    addedCoins: [{id: 'bitcoin', name: 'Bitcoin', price_usd: '2000'}]
                }
            )
        });
        
        test('should add multiple coins to addedCoins state of 0 added coins', () => {
            expect(
                coinReducer(
                    { 
                        coins:[
                            {id: 'bitcoin', name: 'Bitcoin', price_usd: '2000'},
                            {id: 'ethereum', name:'Ethereum', price_usd: '300'}
                        ], 
                        addedCoins:[] 
                    },
                    {
                        type: types.ADD_COINS,
                        payload: ['bitcoin', 'ethereum']
                    }
                )
            ).toEqual(
                {
                    coins: [],
                    addedCoins: [
                        {id: 'bitcoin', name: 'Bitcoin', price_usd: '2000'},
                        {id: 'ethereum', name:'Ethereum', price_usd: '300'}
                    ]
                }
            );
        });
    
        test('should add one coin to addedCoins state with existing added coins', () => {
            expect(
                coinReducer(
                    {
                        coins: [
                            {id: 'bitcoin', name: 'Bitcoin', price_usd: '2000'},
                            {id: 'ethereum', name:'Ethereum', price_usd: '300'}
                        ],
                        addedCoins: [
                            {
                                id: 'litecoin', name: 'Litecoin', price_usd: '100'
                            }
                        ]
                    },
                    {
                        type: types.ADD_COINS,
                        payload: ['bitcoin']
                    }
                )
            ).toEqual(
                {
                    coins: [{id: 'ethereum', name:'Ethereum', price_usd: '300'}],
                    addedCoins: [
                        {id: 'litecoin', name: 'Litecoin', price_usd: '100'},
                        {id: 'bitcoin', name: 'Bitcoin', price_usd: '2000'}
                    ]
                }
            );
        });
        
        test('should add multiple coins to addedCoins state with existing added coins', () => {
            expect(
                coinReducer(
                    {
                        coins: [
                            {id: 'bitcoin', name: 'Bitcoin', price_usd: '2000'},
                            {id: 'ethereum', name:'Ethereum', price_usd: '300'}
                        ],
                        addedCoins: [
                            {
                                id: 'litecoin', name: 'Litecoin', price_usd: '100'
                            }
                        ]
                    },
                    {
                        type: types.ADD_COINS,
                        payload: ['bitcoin', 'ethereum']
                    }
                )
            ).toEqual(
                {
                    coins: [],
                    addedCoins: [
                        {id: 'litecoin', name: 'Litecoin', price_usd: '100'},
                        {id: 'bitcoin', name: 'Bitcoin', price_usd: '2000'},
                        {id: 'ethereum', name:'Ethereum', price_usd: '300'}
                    ]
                }
            );
        });

    });

    describe('REMOVE_COIN action type', () => {
        
        test('should remove one coin from the addedCoins list', () => {
            expect(
                coinReducer(
                    {
                        coins:[{id: 'bitcoin', name: 'Bitcoin', price_usd: '2000'}],
                        addedCoins: [{id: 'ethereum', name: 'ethereum', price_usd: '300'}]
                    },
                    {
                        type: types.REMOVE_COIN,
                        payload: 'ethereum'
                    }
                )
            ).toEqual(
                {
                    coins: [
                        {id: 'bitcoin', name: 'Bitcoin', price_usd: '2000'},
                        {id: 'ethereum', name: 'ethereum', price_usd: '300'}
                    ],
                    addedCoins: []
                }
            )
        })
    });

    describe('FETCH_COINS action type', () => {

        test('should fetch coins from COINMARKET CAP API /v1/ticker', () => {
            const mockDataFromActionCreator = [
                {
                    
                    "id": "bitcoin", 
                    "name": "Bitcoin",
                    "price_usd": "8462.43"
                }, 
                {
                    "id": "ethereum", 
                    "name": "Ethereum",
                    "price_usd": "521.427"
                }
            ]
            expect(coinReducer({coins: [], addedCoins: []}, { type: types.FETCH_COINS, payload: mockDataFromActionCreator})).toEqual(
                {
                    coins: [
                        {
                            id: 'bitcoin',
                            name: 'Bitcoin',
                            price_usd: '8462.43'
                        },
                        {
                            id: 'ethereum',
                            name: 'Ethereum',
                            price_usd: '521.427'
                        },
                    ],
                    addedCoins: []
                }
            )
        });
    });

});
