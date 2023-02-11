import React from 'react'

export default function Posts() {
  return (
    <div class="container mx-auto py-10">
    <h1 class="text-3xl font-bold mb-5">Content Management</h1>
    <table class="w-full text-left table-collapse">
      <thead>
        <tr>
          <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">ID</th>
          <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Title</th>
          <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-t hover:bg-gray-200">
          <td class="p-2">1</td>
          <td class="p-2">Example Title 1</td>
          <td class="p-2">
            <a href="#" class="text-blue-500 hover:underline">Update</a>
            <a href="#" class="text-red-500 hover:underline ml-4">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>


  )
}

   