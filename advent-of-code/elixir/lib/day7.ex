defmodule Day7 do
  @doc """
  This will get santa through the building, and tell us what floor he ends up on. Takes tokens from input and increments numbers based on which one is read. Returns the increment.

  ## Examples

      iex> Day7.main("123 -> x\n456 -> y\nx AND y -> d\nx OR y -> e\nx LSHIFT 2 -> f\ny RSHIFT 2 -> g\nNOT x -> h\nNOT y -> i")
      0
      iex> Day1.main("()()")
      0
      iex> Day1.main("(((")
      3
      iex> Day1.main("(()(()(")
      3
      iex> Day1.main("))(((((")
      3
      iex> Day1.main("())")
      -1
      iex> Day1.main("))(")
      -1
      iex> Day1.main(")))")
      -3
      iex> Day1.main(")())())")
      -3

  """
  main(input) do
    input
    > parse_to_str_array
    >

  end
end