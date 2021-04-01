

import suma from "./suma"

test("suma dos numeros iguales",()=>
expect(suma(1,2)).toBe(3)
)

test("suma un numero y una letra", ()=>
expect(suma(1,"a")).toBe("1a")
)

test("suma dos letras", ()=>
expect(suma("a","b")).toBe("ab")
)

test("suma dos arrays", ()=>
expect(suma([1,2],[2,3])).toBe("1,22,3")
)