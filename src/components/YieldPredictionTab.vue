<template>
  <div class="flex justify-start items-start w-full">
    <h1 class="font-normal text-gray-600 text-lg">
      Generate your Yield Prediction
    </h1>
  </div>
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg pt-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="py-3 px-6">Municipality</th>
          <th scope="col" class="py-3 px-6">Enrolled Farm</th>
          <th scope="col" class="py-3 px-6">Generate Predictions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Camiling
          </th>
          <td class="py-4 px-6">25</td>
          <td class="py-4 px-6">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Perform Prediction Action
            </button>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            San Clemente
          </th>
          <td class="py-4 px-6">10</td>
          <td class="py-4 px-6">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Perform Prediction Action
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "YieldPredictionTab",
  setup() {},
};
</script>
