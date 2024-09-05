import { gql } from "@apollo/client";

export const ADD_COINS = gql`
    mutation AddCoins($id: ID!, $amount: Int!) {
        addCoins(id: $id, amount: $amount) {
            id
            coins
        }
    }
`;
