// Copyright (c) Kevin Cantu <me@kevincantu.org>
//
// F# MailboxProcessor agents, free to use at your own risk :D

type Message = 
   | ToRead of int * int
   | ToPrint of string
   
let agent = 
   MailboxProcessor.Start(
      fun inbox ->
         let rec loop() = 

            // handle the next message
            inbox.Scan(
               function 
               | ToRead (start, count) -> Some(async { 
                     eprintfn "reading: (%d, %d)" start count
                     readAndProcessPosts (start, count) |> ignore

                     // dither
                     Async.RunSynchronously(Async.Sleep (10*1000)) |> ignore

                     // during the time when we're asleep, the whole agent is so

                     return! loop() 
                 })
               | ToPrint (s) -> Some(async {
                     do eprintfn "printing: %s" s
                     //agent.Post <| ToRead (570,1) // can't be called this way

                     // dither
                     Async.RunSynchronously(Async.Sleep (20*1000)) |> ignore

                     return! loop()
                 })
            )


         loop()
      )


printfn "a"
agent.Post <| ToRead (1, 5)  // this 
printfn "b"
agent.Post <| ToPrint "omfg" // this and
printfn "c"
agent.Post <| ToRead (47, 2) // this do not block
printfn "d"

