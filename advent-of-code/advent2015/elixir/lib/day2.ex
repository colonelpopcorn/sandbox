defmodule Day2 do
	@doc """
	This will calculate the wrapping paper needed for presents.

	## Examples

	  iex> Day2.main("2x3x4")
	  58

	  iex> Day2.main("1x1x10")
	  43

	"""
	def main(input) do
		input
		|> strip_whitespace
		|> get_measurements([])
		|> get_total_square_footage(0)		
	end

	@doc """
	This will calculate the ribbon needed for presents.

	## Examples

	  iex> Day2.secondary("2x3x4")
	  34

	  iex> Day2.secondary("1x1x10")
	  14

	"""

	def secondary(input) do
		input
		|> strip_whitespace
		|> get_measurements([])
		|> get_total_ribbon_needs(0)		
	end

	def test_main do
		{ :ok, input } = File.read("input/day2.txt")
		main(input)
	end

	def test_secondary do
		{ :ok, input } = File.read("input/day2.txt")
		secondary(input)
	end

	@doc """
	This will split our input and return a list of measurement strings.
	
	## Examples

	  iex> Day2.strip_whitespace("2x3x4")
	  ["2x3x4"]

	  iex> Day2.strip_whitespace("4x23x21 22x29x19 11x4x11")
	  ["4x23x21", "22x29x19", "11x4x11"]

	"""

	def strip_whitespace(input) do
		String.split(input)		
	end

	@doc """
	This will split our inputs further and return a list of maps that contain each measurement.
	
	## Examples
	  iex> Day2.get_measurements(["4x23x21", "22x29x19", "11x4x11"], [])
	  [%{length: 4, width: 23, height: 21}, %{length: 22, width: 29, height: 19}, %{length: 11, width: 4, height: 11}]
	  

	"""
	def get_measurements([head | tail], result) do	
		[l, w, h] = String.split(head, "x")
		{ length, _ } = :string.to_integer(to_charlist(l))
		{ width, _ } = :string.to_integer(to_charlist(w))
		{ height, _ } = :string.to_integer(to_charlist(h))
		get_measurements(tail, result ++ [%{length: length, width: width, height: height}])		
	end

	def get_measurements([], result) do
		result
	end


	@doc """
	This will split our input and return a list of elements.
	
	## Examples
	  iex> Day2.get_total_square_footage([%{length: 2, width: 3, height: 4}], 0)
	  58

	"""
	def get_total_square_footage([head | tail], accumulator) do
		current = get_paper_amount(head)
		accumulator = accumulator + current
		get_total_square_footage(tail, accumulator)
	end



	def get_total_square_footage([], accumulator) do
		accumulator
	end

	@doc """
	This will split our input and return a list of elements.
	
	## Examples
	  iex> Day2.get_total_ribbon_needs([%{length: 2, width: 3, height: 4}], 0)
	  34

	  iex> Day2.get_total_ribbon_needs([%{length: 1, width: 1, height: 10}], 0)
	  14

	"""

	def get_total_ribbon_needs([head | tail], accumulator) do
		current = get_ribbon_amount(head)
		accumulator = accumulator + current
		get_total_ribbon_needs(tail, accumulator)		
	end

	def get_total_ribbon_needs([], accumulator) do
		accumulator		
	end

	def get_paper_amount(measurement) do
		sides = [(measurement.length * measurement.width), (measurement.width * measurement.height), (measurement.height * measurement.length)]
		smallest_side = Enum.min(sides)
		sides = Enum.map(sides, fn(x) -> x * 2 end)
		sides = sides ++ [smallest_side]
		sum_sides(sides, 0)
	end

	def get_ribbon_amount(measurement) do
		((measurement.length*2) + (measurement.width*2) + (measurement.length*measurement.width*measurement.height))
	end
	

	def sum_sides([head | tail], accumulator) do
		sum_sides(tail, accumulator + head)
	end

	def sum_sides([], accumulator) do
		accumulator
	end
	
end