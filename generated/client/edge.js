
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.6.1
 * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
 */
Prisma.prismaVersion = {
  client: "4.6.1",
  engine: "694eea289a8462c80264df36757e4fdc129b1b32"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.GamesScalarFieldEnum = makeEnum({
  game_id: 'game_id',
  created_at: 'created_at',
  solution: 'solution'
});

exports.Prisma.PlayersScalarFieldEnum = makeEnum({
  game_id: 'game_id',
  player_id: 'player_id'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  games: 'games',
  players: 'players'
});

const compressedDMMF = 'N4IgJghgLhC2D2YCmAbEAuUSB2BXWAzhgNoC6ANCAsikesaNnEhiAObNGVgBGAcswx4UKSgDMAlqjB0GIJrBbp2zAPoSwISgGsJ2TcoIBjCCggAnLSAkEAMjagYxpgkko2ASkgCOuCeaQDKHNcN2sCAFVsCV8lZ1owmwBJIJDEgi8IMAB5bBQATycXMIALCAIAESRnXBQoADVTUKKEyih8gAclEABlYL02KxsAcRwkc2hAltd3SI7IKECAQUd0eNcAX3JGQWUjAMmwVWgrXX1WY1MLIbsHafSvX38pteLZqJjm19bwlPvZzI5PKFb4zEBlSrVCC1BpNJTBUJtTrdCqTAAqEkUVmQNTqGB2WOU2HgAHcrBY2LJSFtwqNsONDv9whF5ocVvctgTugR4ChcFAJPBsKc9AYQJczJZZvYCKt1g8fH4AgZ5e9orEmckVW9woDcgUmRCqrjYXy4jr2l1WH1zAMbnSGYttT8bCyFss5cVOfJdiAOmZ8uMuCAzmL4DwAFZIIyOaV3dAIhVPZUYRNqz7ml0EP6ghVZfUg1Xg8rG6F1RpmpmW7r+iCB8zBgJmAVCgSElSKAho+C1+uN1DQQXYABi5ngsGHUhQMhIFBATcHQu7k+kVNmDomTs1c3dYHZuY2c46ttgFnyAGkkCDhKIQLh1aEV9O13eH0gkvokAAPJAvkZjTcXnlb0FBrAMg2xfhdhvcQpxneguVYDhFHUTQdFFC4TElG4ZU9LNHiVF402ZN9txzItPCQfNgVTNJKCNKEYQrL4i2ra1+mwQZ1wAxlc3eVknX3YDth9dte3GVCRXOQwsOuONZW3AjnlSRESIzMjnTBSjqINPji0hE1mMzME2OUG07W4+lAM09I3TZPDNhE0CkM4KSw0jaNY3CXDFMVZTaNU11SL0rVfJ0wsdQYwy4SrZEXM7KwFxbbA226ZDf27cSG0SgdktHccn3g4gOyQSS5ySodlzg2QSrKygKqFXIqhQJBFlYPh4CWGMh3tHitxCnd7I5I8TzPS8QUQ9AYJASRVxIWqNCsLKyppe8M0Kl81tiD9kB/P8CA3XjgLnasqRpYwSiQU98WsbAOn5bIPJjNFkToUBjxsa6ENEtLOAAdUugIP3urzFBgG6eVwcwjF+hKaSMIVZQmPQoDeqgIC/Ph8A2oRalvWA9CxidqtxkQaVm58SEmkAlj4CobiUlMBqxkQIB4FrNTu/kXq6WRQFMkqCAB8Z3y5rzQIIDoIBh1gPoIa7KBQeATGS1g9BBx6o2e16cPjYT+bi5R0qFwHRZBqwJalmXlDlhWQCVlWeuUdWHqeqAed/XWFITNJDxA31sg8Bm/KZiiCBZsx2eMxIxY9vmQAF43haBsWLc4K2a1teWICsB3F2FZ2xc1zy4691ZEz9pzfT4bI0WD5MgJ1GwI7ZjmQtjnXvsT/7TeB/k087DPZazu289VwuNbd0v5IcpBvW7ztk7N/vKEt6XM8+nPFeV/O1aLqedZngK5+pKv23SySARDxusxbqPOZB0uu8N3oOLYSc6nGAffyHm2R63+2O9x63Unlrd2h9vJ6y9CJAW5lOK5yAU7cUskpSQO9sdf27Z9hUSdMcLylEG42VmHfNuxEXbgN5lTBOL9USLAxIoEhSAP6LFQWva2fp/4IMdkKPeoCS4QJsD5A8MCaHokxCwbe3CC7IKuKgwRUCEjzxfhHLhu8ZKyLLsNTB3JeT8h6lfQh25GHH3cB3Shz8rRmTfow5hX9V7p3XsPTeqjgHkOLtrShR9hEG0sa/W08DJFqJkdhLx+tqG+JUYE4BEo5JoNnpXamWVgwEMIkQ8Ixj26P07nIAWAAFcCDZcJeGbEOWxrCHHsNtgAseSC3EH08XErRp9qbG2yOYZA5gABC+Q/oSCgCUYp+c+5eQRtgJGEAUZo1PJjbGJN0AAEZKAExSrMua6AAAM5M5lyGckbNQi0DGpKMXjVu0dTFZPMTkl+PR4DmCgG0jp39JaOL/s4qJSCcD4Gno0g8zSfqsGwYcPB9cjnMxOffTJ3Nsk+O6Dcu5Dy7E/WeZUzh7yeHKE+bAb58j0Fej+bs8UujVaHP8mC1mEKKJmM9hY2Ftz7ntMRWwje2cXEfLwFigRtxcWKPxb6JJILSVhwyZSi51Krm+KSQirp+RBnJSWGwNgAQOCLGGU83+HC3mAKkbw12YDsVcvidSXl58e4iw+NtVOlBRnjMmTdaZRMcYLKWYTVZlMFlbLWTs30F8Dm6mvmk5u4K24iqhZcmF7F/FcS1UEmJciDVNO0fFX8Urum9P6fKxVSBlVDlVVaxGwQJnYFRnajGDq5mLKoC64mazNmwU9S0/ZaE/WGLJZHYNTcqXx1gXSqVaqXkapZWi6RmL9VCIwWfbogLcEnBJaHJu4cg1nJAaGsV4azI9oZeUwe/aqmsvRSAEdnKx14sTYYIl+jm2gqFYuh+K6u3XI3Y8+x26UWapqfuw9DScWGtPSAVQCN7z4IyP6455L20uk7VQhev4ADC8BAMpvyBmpVkxc1IvVbuodOr7n1M9qEk9E7WCqGmQKudt8b2Qooau8JsNfwAFkMaIeQ1m1Dlr0M7tRdG1x+89VHoUZsY13RiN6FIzfLSC6wNLvIU/cVtGCB0b0ExhVKGVVsaZU4wdXHak8f4V++NvyEn/L2Z2HoKCl5ppKMx5Vv40NgxzpgQlUN2HGxAPDfNyMi1TNLa6+C01lllrWTeD1bqvXtlpvTWdYn0jCo7aK+9vjjamdkeZvplnlMscWNmNTFTmWj0QfuupvG9PHsUSIhLnAkuShS+m9L1msvm2fT/Djb78vSMK7pvDPyK6CdYIHUTAaJNtqk5BmlSaCCVYsNVtLma6tofU68zT762s6Y8Z179x9DMEprnXSLA2YsQbi1Bl+iWzOmws1ZyY9WV7sdfYt1r2H3FUeSfpsJ0HxunZFud2rl25s5Y03l7VE9dUdee0I7rv6fVNpSYK+d+2tIjdkxGgYX2ZuXbKX227AOgntdW6D/jc8yuwrfnu6RsbNEGcI3sA406gOMyi8QijZCEdrpALQpA9CkCMJRyp386PGvIty9U+7QOcNFbWy96BLO2cc5J5hDR+HSss8iVp/dZOFcCd/TyPkxLL0w/I5Jkxy6ntHd8XAtgXPUsXcy3zm7gvZci8e6O/HSjTfE6w+okJPzXvKLxvb4JsT1sGZ6zbApJsRa2davZ0AkNoZgTrBBNzYyC22oc/anzdA/NVsdUFutIXqbhf66Bobt7jejZD/HhsS9fsvrt+7o3ju+PcscizpJVfss1/+0LwH9fcN4+9uDynIA+u7aL6ckvMmW+h7bw123ne/c4+N14gf1NtuF9bWPyjE+aOyyn73dvTXMdd+xytxfXvJfb/L32af135sDqx9xvhuPyfL6MwtKHwGW3XoN5v6FF+/EDBt1v0wxV2W0f1P0D291d0jT9zVzPx5V/WWl9WhzI3EzhxjkOzL3/04kAL+wW3v20zAKdybwJxZzNxgJQXJ3HQbQShH3XwpVizvRN26GGE4FlVKQkE/i3QP1rxAIe170oPPze2v3FlwLvyPwf2Byf3VxPk2z5VD0QwszYKFDQ2tWT08xLRmWrTdQrX83TwwFrRmm2WoNKiQI/yvVhwoxDVL0R3XXhU3Qxx4KW1YE/XFxKw10H0QPfzpz20sIYOsNIMfUZVEOAKcIxXZSIJ/UHxc1oK/2Lx/zDT/1aU3VTVSyUOwGr24LnzrwXwiITQ8N3zNTfBUPc0LWLVT28y0Pgh0Kz3LWCyKmMNQlUE8LX1iI3ysK3wFiSRYJQg0HyQr1Qjg1gA6Hg30HNVCAyIFyyN4Id34OkL9mDz9HkOSJ6Ut2+2SmKKTw8zKNADT0qLoGqJWT2P0LqPjgJUhxaIsO/3aN/27TsKfVnzwPELZS+Ub0iMSQKUvl1xQOi18IO0YMwLhXpXuKAM41CIPXCNeK0UH3/RGNpxAzoPA3hwwJsMWIrwIDgwQ2WKt2XhEI70ePnxP1yIp2pmIwxguP1ziOuISM6NDwYy/CU1R1UxnxBJa27xyMhOJNf2E2FBiMuMpL8I6JfiSQU2wAZJ5wmIw1BOFx7zFz7x/QWKSQm3MCm2xKu1Bkjwhng1jx3zRNczzU2NKK800OzzxmdUOJNLJlz3qNfwL15IpLaIFJuKFNDyVJVLWJs330mPxOyMJI5MgLjz7FdLO1WMZI9OZOCKlLZN9OK3jBfwJWHy+Pp3SV+KRP+JRMVI+wCG5wyzDJvwjNZOP0II5LjOrlrnJNQJTPQLTMnzRKDM+xDJ5zVIcKmLBPZJjOIJdwDKDDrKzIbJzKbP50lILIkNFxB2f19gWPOLtIrKuMdOpOuTfmzLqxwLxLEIJKLPbPiUJyRwCWmP9zjTcJkPyP6NMO8NH3oL+P8L/zNyXLRw4JYWbO9L3LbNcOd23KsWgLr1gIgJPUnM4Bg2pxxKsFUK2KNICzdUz3NLmRz0MPrVfynMTJUh+NnMvMFKgIsj3O/Il3gMHynUCGBWnOQriKZ2RKlzESxC/IoLmPfJAGVzBKwsPNkPbC1z0R4UIoZ2/xIurOvLd0wqorgObz/zoulIYudwVND3LKIodNQqdIlVDwApwU51/CdAY2wBWP6XgygG6NzNxMyKfNbOjNfI7KNQh04CiCMEuiMG0ECAUtYxnxAsNI0PAt81NMrSgsCzxhOKoTOMbTXzIUG2ktTKvNgV4vov4p/JwupjwqOBnUQvPNIToiNzQpRHIokT4vlwEpIKEt90ooyoivcOphYp12QKTMDU4sSuk1kqJ0/PSs93yqyoFmEu71EuMoQIkvYuTJQqCuSp1L7HMssusrAFssWD4GUsCFUvUpKE0u0oHIeLXJ9I3KMvlNMs7DsiZOuwcpTx2IqItPxhqI8stNgrz3gt8o6rKv5JkvnPQt3LCryuwsEpCsjUKjWqQGyC6E3CHFmpZLuyjMWrlKhKisApirhM/z5I3y4uCtEToXEXILusYposYWl3EWeoElevevzi+vzJ+sLMkPAPuoap9xEFhrqvxqYp0W1wvRKp8PKsCmZx4pqtupJvhqV0XTNxRvdDesdE+olOa2xpHIb03I5ARpytqoD1JvEt1LOoCovO6qqt6qDBeomos2ms4FGtlECB5sP3XNxqJIwT/NWuwAsujEGpeo2JtXUPKONOgtct0KOKmk8qtNOO9VOrioROG1IvpowsZrFuZs9uwLghes5o+sRk1scOlJfP+s5IJWioItdtaIhQhp6uUCRootFoPLfJZskxTqYQDtRqDoxtDpbPDsMsjv9PahFu9vTtasHyKsprML1xnOIoqrpseq9pEvCtJuFskzZtzo5vRuSkxtXJCOLr+oEMV2yqJtyqZrEraslrjrBplqrMhrkrRP6uNsCEVogDUuVv5BmrVqdELv0pHp1r9N/JWtg0AomrNrUO2PRitoOr2vcogodqOutJ8p6K8PhP8rQPOW4tbpuvbrhpntwqBtjqpvivhGbo9oFmzuJp9ozonrQCnvgersKvPTYvnvtITqgb/oXIZsAeno7K7qQbTrHo131t/E3rUro35CGTY02otu2vvufpEDNOcozxfopjfudo/sko4outlquuqrbuao7t9v/vfl7smHzoHsPvmufJLrIaPMBsUuBr4c6qbtpugahvZxhuQarq3MzqG2zvZukf7u5s9KHL5oIJPsFu8UQbgYMYBtf1rowfAbdsN0qqEZ3KjUrqUc7PLu7rflMcWBkYsfDKHsjJxtHKkMyoCeUCapjTEZnoociENoGo3tRqvvoZKK2rvvYdJkfoKftsOq4adpNV4alp/qSrlo/JEaSaAaIdIOCakdCfMZDssd5vwIK0UbmIWJjtivcfjoSq0dwd8Vgf0f8eIdORMdabRq5o6Yib0vkYMtHuoqMccf8YWNcZ5MwcbvBpweXuEYAdEcacMcQdOR7ukEDvabGTkeHt+tsaWqFo2cmb6bJvlobGGqAv1PNtvt2N2rYb0JKZQC8u+gJWaNoO/srN/qOZ8c2feaiNcihYqulsRKXqTsFm+f3sCFyCQB3qgD6L7Huaif5tmLiZMuPL6vSfXqGsAuvtAqcuBcguKZgrKe8p4ZMM/pbWha6oxdqawN8YIZQbeNf0hddt5YEf5e8bqZOYacIeWqpYVtRoZccsttZZtv2pYdBcdo5bEg+NPPhOGfdrGeOaFdOYVZeb9skeubztucHuWYeeiYFueajs5eezPI8fiOoze0DvpG8IJaJaDBxbABJeHJsZibxsYspfeNXppassyfdFVbyYBettYbco1dKaMJOsqb2aksXthcxbILebiZoquenBuYWbuc6a1oWqedLoI1jfrE+KGYXvRcLYFeLdIfWetZCfmeDuraWa9JWePsjd1rPqVa+cvq3vyGTcYfyeZc1afpcqzbgvfq5b8tReqa8Z9bwfqeiWSdQbFYNe5dBUlcCuld3euvNflZFbyKbeVfdAmpoZgHWJyYNJTZ2rTaKcXdXeOohZPfUfOovY7ZlcFYRdLeaaermbCcWbzMifDZ6bWYpY+cvwVvjZNqyZnbnf+a/YfqBbtrZezfXZbfru+P4ZA5qbA67b8Z7Ykb7dg8Hfg8ddJYjZdYbciuPZPNPYbvzfbao6vbNYg/qvicFYY/tbDesaQ/ra2dQ7E/vMRQYdw+YZXZ/cI84eI99EVBcCA7RZNbhdlZvYPbOecYJREyqZhYE/iyE5LcDxLPbGJCgA/F0+3Zbr3bleM8tZ9lCDk7xAs75dA8E/hds/Ft/U/hc8s53es+C+7ZQ6iJBvMKwf46i6YJi9o7i5aTan86lcC+i8M+E9C9wqFBgD0A9aNbbf06LdCuFacbdeYpgDuSFlSwi4C6s9S/y5C+jd/RwBkAsxa5y7a4BOq4tbvbq+6GoDStbaS8q4FYAEVQhzB8g6NEA0rvrunh0IS7GqDX9HP+vKOUuhv8GRvauy6EmxqwAe7ODHyR3Hmx3T74CFjs6bEFPUElOwLf21PdqwXQtuhtPaA9vsHRmDPWdUqCvxHCaSH0uROFjzO82KPAfL28uQfobU6of9MK5iGwfgHqZHPnPsuDmgfMWJnYu7PfZMfOvsfX8/O4eNH9u3PxnQeKej2CVwv8eC3BuUTie0euv4uAfkv6eUqUe0rufKezisuafgP2eDvOfGeSfCucf4AEveP4eRnEf2vkfdHUeaupmldzunvF0VyWPEPQCZO6OIesfWqFizdnurvfmb73v1P03bavvdXwWtPfAdO2fVfcv1eaPtezeIkK7/eMvX9Yepv9mEeffDv92kEWry4yfXm5eeeFenPdnw++PIHCfO3hvb3auMfE+RfmffRqf0+VeZvqOc/PPRvtuWfxfS/aepeBe0vg/oeIclfyOG/+ftHr2LfRWxfJuyPSq9Px9s+jvc/ZOiui1C0yvQbpuR+K+x+q+TvG2XGGvUY+uvfy+guOuk/RetP9Amv+k+et+ke/fjuJ/qYJvj/5/t+QB5vxgluVvrunXgEXCOOCqdvFfr/vO1fo+PPY/D25zRqud2t4G8Xuz/VjtJzu5bdBC5vJnoq2phBtCkDgNIjbje5MtHen3b9t92phIAAAbg/2/5Ulb+rePfEOysbrc+CspC/i43HAD9PWxrG/kj1IHh4a2YdW7uxxoEEpiQ9IIgXORIEFEU45Arpk8SgGcD3mEtPsIhjSLYkcODvR1AcWKbzIcBXJADEWj4GXVb+gJXtIOREF+43+snVJhiSLRikcycgjAQoII4KCVBJHQ1rPwj5d9TW1oQIlwWHYv9niHKGAZx2jqgNBmg/amgN2l4BE7iQRBDlJw24vEvBH/AlDsw0GCMtBLgiAcb2cKbdXWetc+vJkYxYl3S5g9VsC0UH5CbBnLUjgwIq5MDfeiQ3QbWz3IGDEWKjIFH4NKFz9vWp/SoXNXcEfpUh7/ZRrQIppuN/BEDcoQCTaFrdRBEQzwWkInbGF5MimbIaGVyFMMlBVg2oq7x+5JoSh5XZocQNaEhDXBFAsYSkMiGTDvBvoAZu3yH6udu+tKXYUkPCGHCJh3QuTrEM35DCUS2g+wlUPYFBJahKHK3ouT7LLlwBdvRlnkMwHLCH6RQ9sH9xn6JcHBJ/X3pXwAEmcxue8OIb/zeGIjVcgAjbAsVx5p8BhXrbYQiMX5IivO9nboCXwJGMCWhxImPliORE19i+dfKkWUJpF/8jOpI6vivzF5oio+GIkkfSK86Mjz4zIpoXCNeFQc6RpObESiL2DFdp+vIjnpKP/6CiuRJw+rhYHX7NcXhbI/kVKLlxCjuR+/XrtqIl7D9dRyojkaqOX7qjxuT/HUUSMwL39Fuy3ZALcMoFhEjhjw3EV/wdH8DT+mI6UQyNgERIQB/wmrKGQICG83BkAk3tAOOHRDfQMJQDIqKCFCVzuH4KANGP2Ha14x3o39NyVTFN8zu6tC7i01t7tDYxVAscnUK5IkY/RmgpHiG0u4PlPhRdDgeS1b6PdUqFuCMY2TQG5N52qbfDhmw+6QjfuHvf7jqMToCsueLfTugX3nHJ9Q++IsURn08bFiNeMueARtnJ678i+DnRXnjzNEZIZxYHOcefyXwJ8HGO42UfbHOEBC6eVw1gBePH61ja+9AzYeKItF/5XxS/Lgd6gfGDCfxMDWXoXz76ATPx9g9cSBJ0bbj9xEEw8UBK9Znjb+f4zkTaIerKI9ePYxdLeWtxAjKxyQmYtQID7dBEm/498UmLUHITqRjolEiG0zE29WxREu4SRJrEh8CUhYhsfEKbE4ShezE0IUbzYkykOJrfaEvWJPGRdNxIbfXpJmzF6C62eYwwb+lAGSZ8JvOQiegNBGAtRxmA8cc4UnEwjlenfTPuiMtG98rWjVIPpeM4m+gw+LI5oahIDECigxZI68dZMnoITTOvoPEd/2cm0iVRbk0bvnxvHeS7xlItcWXwlHWtLJEU0UV+Jgn0SLJt44UWlFomsjkpsU1KUaJFFQTYRSU/0YFKtHBTMJPQ6OvKNK5FjnxO/cCT5I1GNcN+Uk1rmmIkZxS0pKQk0Ufx4nmTsp4UjqcoCv49S+RLOZ0Y/zdFtij63eH4eJJT7+TDmVXVyQaLVFYTQxpYtSUNg0lRjCJow3MeIMg5hS6pd45MeoOGlKj0xpYpiWAIrG7SlJ+02aXWIclRTTJMU4AetOsTXSWJt0hRshwelcTJJ9fSXo4OB7NiPp8knaVjQ9GiTYmXY39DNVQFaTBxynTNlgIhGrDqYNgaqU4OMy/hhC7og4exJhny9Q+4cX0c1MCGbik4ZA5jjGOInQyo2KTWen2G0qoQkBAxccMMXvBgAxiPzEANpMWEfdwR2rAyTjI2E8st20kmqeBxym2jPmYss9hLJambiz+b434UzKDDGCgS4wbpLIPfZ/N5B5aIWVURFlv4sZwPd4cCUhkEzwSXogCfq245myi2Iwq2foK6EqTJ2mQ+knMPFJ6z7eFgw2XpOsHoyc2G7M6a1IfQ3DJpN3b4W7Kon2zm2dggqdFNgmm5nZYQqGTNNC6SCgwIpUwdZgWELs7aBQouSbIQqAzzRWU24lrL2GKSahscuyfHIkiJyTJQM+EcMMjmsSM59c2GR7OxbnclaqWFWp2ALnDjtWRsjhn+24ZYJAKjsgVkkm+YEsZqknKGRHR15/555gFReZwGXnWzV5V4nzjRSSRr0E2dLRSlvOHlsD2xzrTsQuPXmh5j5g1BeYPN3rbzL5U06+aRK6wTlf0oyekDGDaTfNZ5YHDeYpQAVCg/5UAc+TpXxl7Sb54PFen2G+ZgLsAECqBQ61pkiS95X8nzv02nZqUgFAgtEt8wmpLyxYAAUWwAEClYVoKOR0LjH3TiZFUlBZ5AIXMDBBSAHmTvNgWfyROh89hZwrfnRyyWPC9Ht/OzkNgH5NlQCiGwHkaUX5F8+ykjINkjjne2A4OT4MUqsL1eICyYGgq4V3S4FCDGkkQs3nPytKr84QdUNWam9sFBNBBehyNonyn5ci8xQoppk5iDFIi+BV2QkUYcpFZ8sxaQssVfDhFYk0RTgp/ngLPIACmeWHM3E6LQm5gODMwpjB6LBFdC6sUTO8WfN0SgFZBagsCUWL3Ftc6xcpP3nlTTheCwoHEqlkJKkAJCopVAAoVUKewq3F2Z4rCXLimFECrRZgRYEBABFwSq+aEqyVGLnSaJJeIMuKVWLR2DCsHGItUktNbWfdKtrNX5mFzLBgclYa/XKbchWovSvUUFOWllT5iv6RGqlXE6rKR5eHbQuPIwDKD1FvoVwBlKckLTZxYEpcWMsD5eSjp6QwfIwnLbcy7WVy32SCIFlFy7l7qR5cxX2XTi3lC/fUR7hWl2LyJNk1WT3IfYSKsO29QpZ2EYmgq1W4K3SaorRk7K9Wk6WJeTKfHYzUSiC0xS4qCXTKQlbHQxU0zvkmKAlDKxpTAo6WjL+8Hk8ZdS0cWPz6VU1eRdAtoVVjCZDMtlcYqFUZNT5ui3FRKs7m7zemtiuTr/OiVJLKV5cy4TSrqX5LPIaSoZe/JGUyqgBgqjWXkqSVRLUlyq9BR4p+k2LSeESwfLgA6CuA7kBymsn1U9XjBIFqWSZW+BNVMrhlLKrxV8p8VzAvVga/pMGozChrdKGCleeqtdUVLp5ilCaj6vZV0qs1M7RlU0soWoBWlPK51WUobl7KXl34yuVasrymwplyap1aUrmVRqclCai1KaqEURrOlsZb+YPjAA2AtVMYHNXKqDAdrxi6SqVfTPHbj0x19awohmH0XlrW1/Kt1dTBoCtR8pLciuUVL6X8KiiU6umVgt4W+rx1Daw9V2oyXSqiS5IgFHaurWFTGx2ig9UuqPWYK01t8+dWHgGWXqw1ZqntXyvj7rrX8Hq90KOrrWDRFgFmCdfiwdXLqW1rKy1fYqxXugYNF6xNfBvfWprfp4SjNd0DA2TBs1NSg1ffOxWTUpsQ8lVd9MQ2RrZVkGqhhRuDJcq3FTakpbMqQ04jf0m6xYMRqpWN9alLpTMrzJo0ca6NyG6NT2RE3tKV1nGn/qco9mSKgVT7GdmgvxWKKP2Q4m5ap0hVEc12lSzRSRuB51Kk1Za2jb2vo0obclnKsVa4uo0ybzNQG3cWet8XCr/FSqljfZvTlqrcN2StDq5oVXOLbNhaszWJos3Ab8N96lJfSkAVGbMWhq21dFtM2Srj1n6vzbSutWgLEtBSzzY6vY0djxNXG91f6u9Vxa55ZG2NehsXWxBktqq7heFqskMaStcakoLBtq2iaCtDW+TbgvzX4KytwC+SlUsLXNKS1NCurbyotX1Sq1EGqzbBoQ1hanN9jb9XNuw0+aXVeGuToOuMAPqZt0albVeunUnqv1kG/bf+u7ViC5Nd65QDxu3Ud9W5r0k7Rhs7Vnbr1M6+7qtL21PbJ1B21Lb5r7UgbulLC/rYQqvxfbpN3m+rYttO4ZaF1v6t9T9o/V/a11kW5QIRoSnQTk5taqzS9Sq1w6atWGhHThvW3paj5qNXHRwpDUE6Xth2tLf9pR13hyNu2nJYxvJ3taHNC2ybUtqa0qacV8a5jcFu5UpbEdxOunZttQBbq+NeqyWaRtrLCb5tnWqHSGMk1y7VtkOzneDiMHSLzueLQNqHmuUqcJ5qM4WdCopWGb+NwMzFsbCC2aUkBeWmZQrs53Q7jYSm63fyFt3y6P5XWgaXzIfUxKzdUupWVLKt02rklOW2ze7tV0TbZ1iYrBDtuB1I8qZ1W77dTt+0i7LeGQv1kgADZmLbd6mjakov9kqKtWqnE2XhSZ04zrNHm8PXrsj2ybCtXO8rAbTc2KroNOemvYTrW0Vq/ppw33Tqv92OSa1e6lEsHqy2h7jVbetEh7vNXR76dHq2NeXsFgshKtE+4lrXsc2O7cpk6OPebrbnD7TUeO5PWxvt2e7Fdss1HajQX3O6ydK+oMFPsA0b651x2Myn4uU1V6bd7elPcLq71ZyzlYY6DhWPWWjydNWy0leyzd5QijJC+lWZRMrWoj49xUuKVdvkBHjVxiUzHUPpSnhSkDkUtAy9JTk2d+pm+1gKzx30Pae+MsmPelKgOBjjlds9KbdouHS7zZNBpFScv6aVSxk1BpaawboMXA1+h/EoFwcRX7leDYRLqYIfgPsj2pRBokGTID0UypZ0BjCWvLelOgWxQklNZ3tXUIDX8sk3CeDIAMF6dJ37XTRp300QHcAnvUgz/xGm/iPltk09YdM+UHjugT03A/dpsPnTQJQvRAwKu+WQ9nDiE7oH5LhVZ9zx9h9FRtr3G/KZD94hfehOtGiH7xDBx8QJppUJHSpSRtgI+vQPPrMCGR2g3HPoPxGIjMB7vUhPmlhG0JpR5Q2RPaj8TNenOT6RoebUc6Z9onCibUbVn/K/9AwQSa9yMNEqTDIB43WSvAMTjLDU46wwFKkMUGUVgTAIw4cYX2TUDGOvAzMcOUlTCjGq6I4Eam2sAQj0x+FVoJYMiHylHRtFWUeWPtgcDaxjw1joIMxGz9yRoQ0cp4NFGkIORvAw8eb5LGulkE141sfeOwG5RU/KqZIc2PSHnjsoTUQIcBNQnKDnUuExCcwNPHETshr4x4Y2Oom9jDe8ib0c4j9HQtDu9o7sb+OMyej70yNFtIHGabkZgskYyXpN2GTJjxku7buryOQm5jcnNw3cY5O8SEDt4pA4cfkPUrmD3Bs4xqoWK3Gk53xjA31LRP06SDoptI+KeENx99jRsTE/yd6ltTuTk5dHbKfuPym9ThB546MhK6cGUTCp3E97phONTTRKpi3aP3VMyjvdPXZE9YZ+O1TbTsR3btadNOKmOjBJtgDSYhkQ6o972+nSdO1P6qQZGYotApOP3T6ozcnbiV6ZNPYSqTABcM8JKJ3f7/j7YUkl+AX2gz/9X09nSSdTMxtdDCZrMYjLpPKKx5jJw3SbOhEL7MxCJ+nbyaNM6nbDAsTs0Kf7Up9jxTp3fSzkHNYHhzVPWM0wcxaTmgz0pw0zurjPznTpZp9E+wFnOB6aVC53088eyMpHgJ3pkAHufJMuGDjchgfU+oFOYEzzkR9LfivrM3TKzJ+h/eQ1/2li5Jm0gEXeUMONnC9zZklaMbANrCMUkB0I7qbgl6MNz8xhJpca6PlHXDqx3s6eOONI8CjwJ9NRcZ+X7nNzIp688nOxN2GfDQ5g+YuPPNBHiD25hQ+kZqOJGPjygZU4RblOcmyKpF2C3J2yMlGOLi5tvkecJGZmGevFvC/Tv9NHGqjGF+i5kbqMlinQ3505GGZfMRm69XupXQsa7NpmaJpZus0SaF35ntDmpv9Msh0tfn9DQ2JM8you317vdxZ0y/JfMunJLL4a6y2pYe6fmD6RaPSz7oAvGGi9y7Vs8yfAusnKjUF3xPeauOPmELDFkE7dFCv9mX4EVxC1EYosPm9+SE0cyxaxPoX1eSVmK9hbJNpWLzTFmi2KbXNeQ+Lg+Zi89ONNsW/8eVmS7Fe4sBnEr65yq5lwEt0ShL3QBq9saQuXnSrkfLw61YquiXgzl0ry80ZrnJn79pJ1K5FYpMr4QzvY6bP2IbP6zALwB4C0ybGNgWD0EFiS2FceNjXCrC14q3FcgsJXyDU58i04cotGWCLNV80cRcDO4nQpnkxY0VaoslX4T+psLsufZOrmXTbxyU/1a1O/XOLBpzq5lO6u/GvrRli0wqJavXX2rq/WE01LHNkHjr91u8R6YxtZW+zw1lG2NZ9GDXveRN7G/DbxP1HszhJvCb+YInKW8zWhuTdDs6P5XrjQmbS8jfxMTWoA3ljrW+faMLF0zmN/AzTbUNgyLLuZzQ2ruFsFiAZBNoG2BzLN9GprxJoW9Wbk4maqdIyQYxsuGPbXAru1zFfLNJTntVTi0108GPcuKaX9ruuzWsv1tAHDdphyebsrlnNymYFt50wipBsamg86sqdqPofW1bAD2m12y2cKYmySQpsTdoFEJvhzZtYOu/a5dP2bmy9KLBO8rZB2Za394qu3VZfoWs31L/mtJs3odshb9LLNmy1MK455qiNBaxpSNuoVpVw7Buwpm7Z1Ym3X8CwABO4x9vjnc1ed3jU3dY0a2UzdjJAwQF0AdAKgHqlABIBVji4nrOdpHp0ngC8gqIuzPi+IpjUBrydPMsO87Yjud2o7ILGO3Hazs3mjr7alO2vraNa3it4G6+7kdvPpkyNaG3WxPdmupm+FcbZvTju/vV25bT9+oQDaIiKzaLxmwbTZqo2F2XLxd2u4/ux323RV8D1O0g7csfnFN1+vnUnrg25b9dKMru5fZFjx2b7V1z7QQ8weZL3z9OvuxQ7fu32y7QDohw/arNRC4LMO8uwqrYcC7x7IDyM1w4U2YqoN9S1TUGv50YOCVn7DuyC1IdBWQAsd8h6/dYvv2XN72ZLNTKP1F26H8tgddAH7sEjB7WN5neRpfZ0MO9oDkR//flW0sWdN+hsLQ5vVa297UmiPODAcwx5KkElRPBtb8tAXi9xt0C/njpgL6My2j1gdY+EcJjuHkTqrDo5/tp31d05+MkHB5s5KPHHDzW1PbSelkdsGZuq9+uycxPVL6d+J0JqidCDP9Bly7fk4qahyinGj3tjLdaOcO4nonJQxzcLM+KzbgNuc8DckZM3ZbsTx4WW1OMB2/l0wh2xHo00BOhj/llGaXJdoD2oHZVoZ5pZ60NCybZkqhy+Okt9Xjt/hrZ5rnQYoWVzjOHK7Mc4unXkrXXVJi7vQdu6P9et3y4s6CcBXo7SjsuSY/WeW3Nnf1kBqozAZK2rnkl9XphdBvHPUVuFnG3afOfxWKbcNs6xJo0t/XNdIdpLU46dvvODbSzscUo5UcBAmH6jlh4LFO26PEH+jsB6/kzsSt/nvt2/iPvzuEtXnyTrBxU9E7O60HcDl55PpyeT3OnNZ9dvvbuS66BX8zv2YE62vBPvnPdglGjoEumPxbFe/h+/sle1Oa72D7hzy8Ad4Pq9mrqlwBpScGPwHyrxl0PbeyzP2XQj8p/Q+5fP6K7zztl0a45c0uRHIr91uq/5er6pXYK/F58+Wc/PVnYLnc2qf9tunS78nZZWYxBVlP19Zrul74N2cbipZULqZ9G/OVC9LlA7BBya85cOu7nPT9K+TVYoXOBnNNcl908auOGPrlzJZRW2BV5uXHb22x/NfueLWQ5vDhxwa41d+v89eLl22faNvyvQnIc/p4wfDdW3I3Ntj7T41zcF1BXv9z1z/JTdIuk7gvRo5pemZRxZmsbtpvG61c2POnxb2t5zYuCIvLryLn0/C6zes1G3r+w9y2+Xemu/7Hbkt+nt7lDbBdPlhZ4G9ldfOL7Sj8Vms+zuDO/bQJ6Fw86DviPj7Q70+wo/Pt6b/2chB2Zk9vdU3odgKyti+4TeP3V3e9pTT68dvEOGTo74Dwq7Q8JyeOlb6BzO6g+ZuUHZrRd7I1feFv5bRHl/Y45cVzPB3/74d0h4o8oep5fTr21O/o+Avbnlo1j+E2PdjOVJp8EAJpVHoOZd04x1gGNKsDjuCUkgfQJOAbBQBoiIACkB7eUDEvobWw2GxXrxl2vE3tLglLcg6TdJL9nABQqkVyg5p2PHr11u9af2dh3P/SNIq26O29OAUUMHkHGlXsQfmX++infDvk/2uk3BKGANZQ7NtWSbmuWe+l9Gt3vnjW2gUIbVTequQAM1JUoVAoX4B3Xnoh4eOQiVzhsrqkFTyuhuhvZruE3T68Ama8Fnncv6PT2AAM+ygkiaIEoGODJCUBTP5K1gBZ9c+Lwkndngj8K9/ROftZ1S5p+S6SLOfJqwX7z647ye3W3sgXgZJ5+UK7e23S33ChF9uSzfcZ99/Dx0/zGD5UvlnwfcU5GunOa62XjD6eYy95fNzBXvQCOu+9leUEFX9lNV5tm1fzjRqIi4lW68exWv/nzrLfg69+5uvhlg8H19FATVjPk3jT+Z6vvrf9nNn+b+NqS8OffQK36VDd4IBHedv933J7578NyY6fJ39Imd9C+lvwvDYa7998T0H7wdzNk949+pjPecvH3wql96J83ufvuXrD7EYB9FeF9IP2RGD6q8Lfpp3cjbTD7JeUB4fhsFnMZ5R8rdOvSCdH/U586/oIA7pXH+YEpBTeCfqj6X5u7Gy2eyf9n1d4Pip8ue+fbn5YooTZ8hfadyOx1wF/98eeSkp3hn0K5F90urvUX9w4ncplxfG1EPzn+dbF/fferWFi94YCl9i2Tz2f6Dyk2Yd6/+QoqRH74mxIzUIf5v5B5sAhxjgPV3SW3/b/x/KPCfBf6zxS9J+C2Y/SR732t679vfG9yacP32Iyxefo/K7pnwd6R+0/x/q1yf1H8S8e+Lv1MHgEP7+fgfp3ArFX5KDV+wAIfmc+ZXP98T7+LAh/4/1r7C/KAygeAjCsP5advYpNW0oP0ju+sJwIAaXrP79/l/Qn8/MN0k8wOIvyY9yGUv2U9y/FrwcwBYGamGAm/DoG6RsgKAKoxa/FAIx8K4LH1GI3wVvzM8O/J3zA9KHGX3594vZ7WNdztDjzcdYfJrxQCEfGAPn92vE3zR90Aku0UQsA7mRwC/fEbzG9yQO3zwCZvNR1qtn/ef0pc0/YP3lJqAsIH19LEQ32RY5qVHzrw6/HVw2B2AwbygB+UCbz4CHffAJJdvvfpUF9Rncn099qYQfwicliLbwD9I/dn2n833fb0qc0SVnysD3/NPU/8jAePzMCJlO71X9FvWPxS9v/F7yICXfZQFACo3AAIkAOgcXyBcN1BwEB9ivE81t1yvOCEq8j/DXxjlbZaH0PBJAsv3UDoAzR0YCaAZgJyCevDslUD/AWUElRzAbgNJBeAtvz2sBA533iV2FZwOKDP/UwL0DzA1b0sCrHbwIe86vewKkFF/enx6DGfXwNOF3A9oM8CaHDn3ECjLTPwaCpZEILnd6dGe3CDIgyG240YgpX2+8Eg0HySDwfVINf4b/UXR19GvKQNoCDfYe2ygo5BQL3IlArl3YCJqDQJM8tA9v3qCn/cl30DmgjH2902g+YJl0BgiwIj9ug8gNe10/CLVE4KgwEKC9A/aYI/8EbcYL+CYHSYIF8vg1gM3M5g94OJ9ZfCXxcZAA6L138QAv/1RcjLRXyB9EQzFh2DVfPYPV93faUhP9jgzIN19IAooLoC8g64KYDFAlgPr1MAwfGt9QyJ4Lx86gzvyACNnAbWRCDA9pxGCB/ZYg8CAQzoKBC32GwMoC7AiEI6DpULoMVDhg/v0Ys+ZBEMxCZffQNT8Dgmf1GD2wDEJFCAXQkLl9iQu8RWCIg3/2tDO3S3ggDpApQBZxsSW3TQCig74K9BG/eDEQDOgdqmeDag6mDeCLQplzYVxQ1EPr96dX4P1CggnhyO8rcKfy1CTQvoNVCHAxf2TCV/EEJp04Qu8U39SXIQPJdKQg/2pCUg2kM190gnYxZxSwy/3LDr/asLBtiwB/13J4wxoNl1qnQhyX9ZsWEJcDZg/wLWDUbGITxDE/Ne1ysiQp0IkCmQ10Mr9ugW3XgD/QpAPOCxtPvzN8uQrrR5DqYfrx5kBQl4KFCCA7f0CCOw0HSmClQnz3zEGvZ6zh8Vwt0MuDgwY3wKDOQ70LRC54dgN3CliKoPG9gw/gOFDPWFVxPNDQv9VzDU9FoKaQsg5kIr96AqzXyDUAQoPzDgIOTkscdcHTwM1pGekFwDtAxh0ECk/IPX/J6WPsLAjqbNV15c7KVMNsClvK8OqZZw6CLkxYI0333Q7gh11/Q59ANTxZMI14L/Cv6S1zMcSfM8PIjlQ9f2Td+9f8J4iSvFl3WoQIr/R9DmPMbCedFKaMOUCFiJVyLDcImlSv0k2QiJkj53EiP1dNI88L29KIl0NvC5wsbHoj4I/sMx9gXRuzUoOIva2wiGXHf2ADYvTsGIVsOLSIt9lg2e3nt/QJe0uwF9Dey3st6U5yojLOGiPdCxAMQE8hAgDwFJBafFAK9CEI30IHVxdUJgwi5AwUNDCuI8WScjRQlyNu9+IqSLqcYw+YggjwoxIjkDHwuCOfCkotgOft0IljBoIfwrCKMdVI8cMwINIsiKKjtXLlxoo9XPhxVYPIkqIWIww0SNyjLQ/KJ/VSAw/TEDao8APWMbwlkIuC2vdkKfDbgjcPuD6o0e1siMo/cI3VWonCPai99VagsdaGTUO6jhfFQ3n9iPcjUUiuXEaOyjULGLwT04vO6IdcTgwm3KiBYJYEijoosAFiiSQeKKKDEoyyMQiUolqG2j8gOyKyjDw/EOciXoub2icBIi8MMFjIpaJkC/8H6KiiYwGKLijkA4GONDGIjaOYjrItKKQA9wkMN7sDoxyOPDBNDlS6jZo0GOjcj5UiMkjGYoiL1o0YqCLZD5AjkPWiXwkqJYjmtPFgpjfw2GO4jxoiMJfVxQo0MrCpQnUPpdCAiAITC6lN6Lmt7w+SIZjCYwSNNCCNC/UOjno6WL9V9I5GMMjxnTRxuiTYi6IU8JBLmNyD7w8yJqimYuqPNdHgoMMyiqY8GANiCQ3O2DsbI2diGjNwhp25BvIhez8jMsAKM3sWoYKIxc7Y1ANojWALGL+iAYoGIMjII52Ib9wYrdRFj3YvaNfxRoiWNpj/g89UKj2Y7SJkJQoqt2yDuYh2NWjqo/mLmi3wraNep6QUWJaivYmmOViTwx9i1i5Y7UIOlv1S2N7i1wiiN1jpvR6PNsxIwCNfUyAsuNfDSohaJoD0Yu8O/VHYhuIzim46mCVc3Yueg9iCUByKVimQlWM/t/Y5CJTDrYowNPcLY7j1ujA4+6N/QC4vkyOjNHN3xHidY1GJnCTIhOOUAk4nGP+i8YhKO1jWAJiPaNuNVKIkc1KNuM4jxYp+MNj91KMLvj3oxkOLDq4+2O+jfov+JTj8YtOJATUzbrh/A3AxYA8AIAb8L3jfQWIEW42ouBK5N1gjwgsBmAFhDZMJPPKKR4AAKR5Ad7TL0riBuL6Jfh2EjBiDNf0ChJlQSEmoLwDhEqhJ9iXJa20NFnjKWAmAwYCCG+9+EzhL+8K4uONZC/8FRM0s5OavzkDUIos25tmo+gG4SCeM4OXjTI5QBmpNZbEmwSWvIBOUBcEkRwVtYeQUNMShrXhPP9OAEUlsSTIhxPTiOY5KJJJJJNxLKiv4lnBmo6SXxIsT/EpxM6c5OOAIQDlwmJKo9GnT4lCTP4ixO/jpZTizXcQXWKgyTTg1BPjj2Lbd25MznPoV2ZCk68KXia416zUSVA6EiMTqktC1qS0El+GsTYSaJIr9Yk4mNASJJVxP3D3E8m08TmCbxL0Buk+xL7j1wgWOUCFbMkk0Dag4ZL2cAkzRNgDvEjGEmTUA3pNmT7ghYg9CgwgxK5tYSMRNnAwkrJNrD5KLpPdI7E7ZOmSiY3ZJJjgkwZKWTzkupJfhbdHxJuS/E+5OkQ4kx4XmSSzRZP2hWk8xPeTfET5M2TvklJLfjgEvpLwSFiBcKST8gW5IR8Q3XNhaSwo8JJtMGkoO3SShkjROWj3ORj1CDM4kkmaSCUxeLBT2kiFKuTAMLZLRTfkuFMeT+k55KqTKUopNWSiU2lLRIvk0MlRS4oHZMbjGk4JIWTjEsgDeSaU+cNpIoU/lJ+TYUxxPhTnE/ZIwSnQLBMATUkrfRTFgUs5MyTwUnq0nDP3eJAST/yWEgFSxtI5JyVTkkxMJSMYgc0NTz3RihNTXI65LlSUky1NFlfUTFNa5Rk1gEWDZEslOEidna1IlS9UqVL9SHUo5ydSa6K93FTlkpkF9TggyNJz9o0kklMASGb1J4TsU+1MdCjUjkGdT6MCZOhSekzVPWEvUjlJqTqUkpJxT//QNI0Vg0nVJtSqU4pLWToLLXlxSY0ypJDT40zw0TSckwRIWJIk2VJ5xzUtKg9TTZRtNDTOUvtJrco03r1Jj8KApIrTQUltO5St3eCUETO08t27TJU6tPqTa0t8MRS6UotAZTBU0tM9Sm0TNMo4+0/1ORURU+uyblL05dKxSLk+q2TTi/EoOhJ00ndLDS90973KSj03lKLS3UktPHSEKK9I8Ts04lJ0TJ2fFNeTm0rlLtToMgDN/RIUr8FPSLUzTjSTy0+DOnSoM4mw7TTbHDJBTwXKtNbSCMg9JUCdfVH3b9jPMDJdoIM/jhnTJnUlM3ig0mnB/S8M19O8Myk3JK3SdcRjJWTmMiUzAC2MgDl3i84glEfinoqRKNiS4mpwvi1/MeMcSZQiYLlD1QhUPPi547kOZ8clRwOBDtMpSJ/k9Q8MKtdHtUuP8SwQgcJ/9yQgVlvS2DLL1WCHQnEP3jNgskPbCpZOsPMAr/fxPpCQ/D6JXTEMleMg014sEn+T0wgsQpTcMz6Pwyxkl1IQx5U18y68lU+JL3ttPLDNow4MkjJ9TYslFynD802DOIzdUlBKCzLE/tLGsMhTjJizuMhgLriGIv5JSyAUylkh8n4d6E4R2/C/28yGwygDwE4QGqAQozhKwFiFAMwMl2DpAZIKsBess0H6yXaZogWIxpV0TSops0IBqgcQMsHwQxkHAAIA+kCQAIEQAK3jaFlssVBM9jAbEF/AjAfbN/Q0QCYDGRpYdYi1x84WwHwF64o7JqhAQcynHACYKAC3BKAQEEGIvsn7JAAvALoCMco4QECsAegcYAkBTACQAAAvMfGayuGLwDEBWsxpPRgOgDoAGApkE30Y544GjMFgloPkAmA0ACvXSzsA9SGUAdwzgKaj+vNQNYBacsoKM99E7HxnZ6clnJ2imosvSpxQFdKM5yqlAFCqVjPG7VYAbtdiLkCVI8/Q5peczrBu1s1a7XAScfcXMZ1Jc/2OM9WI71XP1Y1MXKai+QnnFYBdcnMmM9FUJcJBB2AZFJcxvQfHKeD/QKGFMArU2CHJyNQSnNFAPwuegZzDPNnP09Gcp4P685cwwn0Ad4vsGAoZ5bnIaingvCj9yI8mdieDhc+XIhiW48mKDCJchnSlzE8uellzWcuPIl1o8pPOVyU8/2KeD1c1YAZ0tc1uPdj3SfXPdIng43Ob9TcmvIDD+URkMV5AYXHJugDgAwFDSSQW0Dah6AA9AIT+QLPVETKAYROISyQakBUCgAA=='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/al/Code/wordle/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.6.1",
  "engineVersion": "694eea289a8462c80264df36757e4fdc129b1b32",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gIi4uL2dlbmVyYXRlZC9jbGllbnQiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgZ2FtZXMgewogIGdhbWVfaWQgICAgU3RyaW5nICAgIEBpZCBAZGIuVmFyQ2hhcgogIGNyZWF0ZWRfYXQgRGF0ZVRpbWU/IEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikKICBzb2x1dGlvbiAgIFN0cmluZz8gICBAZGIuVmFyQ2hhcgogIHBsYXllcnMgICAgcGxheWVyc1tdCn0KCm1vZGVsIHBsYXllcnMgewogIGdhbWVfaWQgICBTdHJpbmcgQGRiLlZhckNoYXIKICBwbGF5ZXJfaWQgU3RyaW5nIEBkYi5WYXJDaGFyCiAgZ2FtZXMgICAgIGdhbWVzICBAcmVsYXRpb24oZmllbGRzOiBbZ2FtZV9pZF0sIHJlZmVyZW5jZXM6IFtnYW1lX2lkXSwgb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24sIG1hcDogImZrX2dhbWUiKQoKICBAQGlkKFtnYW1lX2lkLCBwbGF5ZXJfaWRdKQp9Cg=='
config.inlineSchemaHash = 'e92176b583ee6e4632d76529b6f5b66faaf6e5fd631a053ba56fda59f5dd9068'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

