# GEL Circulating Supply Resolver

## Description

Returns the current circulating supply of the [GEL](https://etherscan.io/token/0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05) token.

## Instructions to query the circulating GEL supply

1. Go to the `GelCirculatingSupplyResolver` page on [Etherscan](https://etherscan.io/address/0x54D6CFC43299115535020173b7C00765E521Eca1#readContract)
2. Read the function:

```
function returnCirculatingGelSupply()
        external
        view
        returns (uint256 circulatingSupplyWei, uint256 circulatingSupply)
```

**Note:** `circulatingSupplyWei` provides you the circulating supply with 18 decimals whereas `circulatingSupply` returns the wei amount divided by `10**18`.
