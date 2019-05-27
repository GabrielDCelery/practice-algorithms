
import unittest
from solution import get_nth_fib

class TestProgram(unittest.TestCase):
	def test_case_1(self):
		self.assertEqual(get_nth_fib(1), 0)
	
	def test_case_2(self):
		self.assertEqual(get_nth_fib(2), 1)
	
	def test_case_3(self):
		self.assertEqual(get_nth_fib(3), 1)
	
	def test_case_4(self):
		self.assertEqual(get_nth_fib(4), 2)
	
	def test_case_5(self):
		self.assertEqual(get_nth_fib(5), 3)
	
	def test_case_6(self):
		self.assertEqual(get_nth_fib(6), 5)
	
	def test_case_7(self):
		self.assertEqual(get_nth_fib(7), 8)
	
	def test_case_8(self):
		self.assertEqual(get_nth_fib(8), 13)
	
	def test_case_9(self):
		self.assertEqual(get_nth_fib(9), 21)
	
	def test_case_10(self):
		self.assertEqual(get_nth_fib(10), 34)
	
	def test_case_11(self):
		self.assertEqual(get_nth_fib(11), 55)
	
	def test_case_12(self):
		self.assertEqual(get_nth_fib(12), 89)
	
	def test_case_13(self):
		self.assertEqual(get_nth_fib(13), 144)
	
	def test_case_14(self):
		self.assertEqual(get_nth_fib(14), 233)
	
	def test_case_15(self):
		self.assertEqual(get_nth_fib(15), 377)
	
	def test_case_16(self):
		self.assertEqual(get_nth_fib(16), 610)
	
	def test_case_17(self):
		self.assertEqual(get_nth_fib(17), 987)
	
	def test_case_18(self):
		self.assertEqual(get_nth_fib(18), 1597)
	

if __name__ == "__main__":
	unittest.main()