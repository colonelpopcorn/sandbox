module Main where
    
    doubleMe x = x + x
    str = "Hello, World! " ++ (show (doubleMe 45)) -- See I got you and your functional ways...ain't no fooling this joker parentheses is the way to be!
    main = putStrLn str