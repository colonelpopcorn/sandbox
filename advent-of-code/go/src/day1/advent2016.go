package main

import (
    "fmt"
    "strings"
    "strconv"
    "io/ioutil"
)

func main() {
    /* 
    // Day 1 test
    data, err := ioutil.ReadFile("./day1.txt")
    if err != nil {
        fmt.Println("Failed! %s", err)
        return
    } else {
        fmt.Println(Day1Part1(string(data)))
        return
    }   
    // Day 2 test
    data, _ := ioutil.ReadFile("./day1.txt")
    fmt.Println(Day1Part2(string(data)))
    return
    */

}

func Day1Part1(input string) int {
    splitList := getSplitList(input)
    directionMap := make(map[string]int)

    directionMap["north"] = 0
    directionMap["east"] = 0
    directionMap["south"] = 0
    directionMap["west"] = 0
    initialDirection := "north"
    result := 0

    for _, val := range splitList {
        initialDirection = getDirection(initialDirection, val[0:1])
        steps, err := strconv.Atoi(val[1:])
        if err != nil {
            fmt.Println(err)
        }
        directionMap[initialDirection] += steps
    }

    // Make an arbitrary direction negative to cancel out the progress of the opposite direction
    result = directionMap["north"] + (directionMap["south"] * -1) + directionMap["east"] + (directionMap["west"] * -1)

    if result < 0 {
        result = (result * -1)
    }

    return result
}

func Day1Part2(input string) string {
    splitList := getSplitList(input)
    coordinateMap := make(map[string]bool)
    coordinateMap["0,0"] = true
    initialDirection := "north"
    coords := []int{0, 0}
    
    for _, val := range splitList {
        initialDirection = getDirection(initialDirection, val[0:1])
        steps, _ := strconv.Atoi(val[1:])
        
        for i := 0; i < steps; i++ {
            switch initialDirection {
            case "north":
                coords[1]++
            case "south":
                coords[1]--
            case "east":
                coords[0]++
            case "west":
                coords[0]--
            }
            visited := fmt.Sprintf("%d,%d", coords[0], coords[1])
            if coordinateMap[visited] != true {
                coordinateMap[visited] = true
            } else {
                return visited
            }
        }
    }
    return "Failed to find a match!"
}

func getDirection(initialDirection string, turn string) string {
    if turn == "R" {
        if initialDirection == "north" {
            return "east"
        } else if initialDirection == "east" {
            return "south"
        } else if initialDirection == "south" {
            return "west"
        } else {
            return "north"
        }
    } else {
        if initialDirection == "north" {
            return "west"
        } else if initialDirection == "west" {
            return "south"
        } else if initialDirection == "south" {
            return "east"
        } else {
            return "north"
        }
    }
}

func getSplitList(input string) []string {
    trimmedInput := strings.TrimSuffix(input, "\n")
    splitList := strings.Split(string(trimmedInput), ", ")
    return splitList
}

func normalizeCoords(coords []int) int {
    if coords[0] < 0 {
        coords[0] = (coords[0] * - 1)
    }
    if coords[1] < 0 {
        coords[1] = (coords[1] * - 1)
    }
    return coords[0] + coords[1]
}
