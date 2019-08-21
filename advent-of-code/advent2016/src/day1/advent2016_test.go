package main

import (
	"testing"
	"io/ioutil"
)

func TestDay1Part1(t *testing.T) {
	result := Day1Part1("R2, L3")
	if result != 5 {
		t.Errorf("Returned incorrect value! Expected %d got %d", 5, result)
	}

	result = Day1Part1("R2, R2, R2")
	if result != 2 {
		t.Errorf("Returned incorrect value! Expected %d got %d", 2, result)
	}

	result = Day1Part1("R5, L5, R5, R3")
	if result != 12 {
		t.Errorf("Returned incorrect value! Expected %d got %d", 12, result)
	}

	data, _ := ioutil.ReadFile("./day1.txt")
    result = Day1Part1(string(data))
    if result != 262 {
    	t.Errorf("Returned incorrect value! Expected %d got %d", 262, result)
    }
}

func TestDay1Part2(t *testing.T) {
	result := Day1Part2("R8, R4, R4, R8")
	if result != "4,0" {
		t.Errorf("Returned incorrect value! Expected %s got %s", "4,0", result)
	}

	data, _ := ioutil.ReadFile("./day1.txt")
	result = Day1Part2(string(data))
	if result != "127,4" {
		t.Errorf("Returned incorrect value! Expected %s got %s", "127,4", result)
	}
}