import Employee from './employee.js'
import { jest, expect } from '@jest/globals'
jest.mock('./employee')

beforeEach(() => {
  Employee.mockClear()
})

it('Checks Employee fetches all records', async() => {
  expect(Employee).not.toBeCalled()
  const employee = new Employee()
  const employeeInstance = Employee.mock.instances[0]
  const mockFetchRecords = employeeInstance.fetchAllRecords 
  expect(Employee).toBeCalledTimes(1)
  employee.fetchAllRecords().then(res =>{
    expect(res).toEqual([1,2,3])
  })
  expect(mockFetchRecords).toBeCalledTimes(1)
})