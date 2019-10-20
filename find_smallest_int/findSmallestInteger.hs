import Data.List (sort)

array = [5, 1, 7, 2]

main = do
    let b = sort array
    let c = head b
    putStrLn $ show c