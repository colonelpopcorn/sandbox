defmodule Day1 do
  @doc """
  This will get santa through the building, and tell us what floor he ends up on. Takes tokens from input and increments numbers based on which one is read. Returns the increment.

  ## Examples

      iex> Day1.main("(())")
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
  def main(input) do
    0
    |> increment(input, 0)
  end

  @doc """
  This will get santa through the building, and . Takes tokens from input and increments numbers based on which one is read.

  ## Examples

      iex> Day1.secondary(")")
      1
      iex> Day1.secondary("()())")
      5

  """
  def secondary(input) do
    0
    |> increment_secondary(input, 0)    
  end

  defp increment(n, input, token) do
    case String.slice(input, token..token) do
          ")" -> increment(n-1, input, token+1)
          "(" -> increment(n+1, input, token+1)
          _ -> n            
    end    
  end

  defp increment_secondary(n, input, token) do
    cond do
       n < 0 -> token
       true -> 
      case String.slice(input, token..token) do
        ")" -> increment_secondary(n-1, input, token+1)
        "(" -> increment_secondary(n+1, input, token+1)
        _ -> n            
      end            
    end   
  end

end
