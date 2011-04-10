(* Kevin Cantu (c) 2011
   Binary search, inspired by this posting: http://reprog.wordpress.com/2010/04/19/are-you-one-of-the-10-percent/ 
   
   It would work for strings, but I'm still debugging the generic types...
   *)

#light

let search (needle : 'a) (haystack: 'a array) : int = 
    let length = Array.length haystack
    
    if Array.length haystack <= 0
    then -1
    else
        let bottom = 0
        let top = Array.length haystack - 1
    
        let rec search' (needle : 'a) (haystack: 'a array) (bottom:int) (top:int) : int = 
            if bottom = top
            then if needle = haystack.[top] then top else -1
            else
                let middle = (uint32 top + uint32 bottom) >>> 1 |> int  // avoid an overflow
                
                if needle <= haystack.[middle]
                then search' needle haystack bottom middle
                else search' needle haystack (middle+1) top
            
        search' needle haystack bottom top

let test expected actual = 
    let status = if (expected = actual) then "OK" else "FAILED"
    printfn "%s: Expecting %d: %d" status expected actual

do
    search "banana" [||] |> test -1
    search "banana" [|"banana"|] |> test 0
    search "banana" [|"telephone"|] |> test -1
    
    let fruits = [| "apple"; "banana"; "glenn beck"; "kiwi"; "mango"; "orange"; "tomato" |]
    search "lemon" fruits |> test -1
    search "aapple" fruits |> test -1
    search "apple" fruits |> test 0
    search "glenn beck" fruits |> test 2 
    search "mango" fruits |> test 4
    search "tomato" fruits |> test 6
    search "zucchini" fruits |> test -1
    
    let mo3 = [| 0 .. 3 .. 3000000 |]
    search -3 mo3 |> test -1
    search 0 mo3 |> test 0
    search 1 mo3 |> test -1
    search 27 mo3 |> test 9
    search 21000 mo3 |> test 7000
    search 2700000 mo3 |> test  900000
    search 3000000 mo3 |> test 1000000
    search 3000001 mo3 |> test -1

