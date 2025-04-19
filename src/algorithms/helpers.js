/**
 * EN: Creates a new trace object to start visualizing a sorting algorithm.
 * RU: Создаёт начальное состояние (трейс) для визуализации алгоритма сортировки.
 *
 * @param {number[]} array - EN: The initial array to be sorted. RU: Исходный массив для сортировки.
 * @returns {Object[]} EN: An array containing the first snapshot of the trace.
 *                      RU: Массив с первым снимком состояния сортировки.
 */

export const newTrace = (array) => {
  return [
    {
      array: [...array],
      groupA: [],
      groupB: [],
      groupC: [],
      groupD: [],
      sortedIndices: []
    }
  ];
};

/**
 * EN: Adds a new snapshot to the trace for visualizing sorting progress.
 * RU: Добавляет новый шаг (снимок) в трейс для визуализации сортировки.
 *
 * @param {Object[]} trace - EN: Trace array to update. RU: Массив шагов сортировки.
 * @param {number[]} array - EN: Current state of the array. RU: Текущее состояние массива.
 * @param {number[]} [sortedIndices=[]] - EN: Indices already sorted. RU: Индексы уже отсортированных элементов.
 * @param {number[]} [groupA=[]] - EN: Indices for group A (e.g., comparison). RU: Индексы группы A (например, сравнение).
 * @param {number[]} [groupB=[]] - EN: Indices for group B (e.g., swap). RU: Индексы группы B (например, обмен).
 * @param {number[]} [groupC=[]] - EN: Optional visual group C. RU: Необязательная визуальная группа C.
 * @param {number[]} [groupD=[]] - EN: Optional visual group D. RU: Необязательная визуальная группа D.
 */

export const addToTrace = (
    trace,
    array,
    sortedIndices = [],
    groupA = [],
    groupB = [],
    groupC = [],
    groupD = []
) => {
  trace.push({
    array: [...array],
    groupA: [...groupA],
    groupB: [...groupB],
    groupC: [...groupC],
    groupD: [...groupD],
    sortedIndices: [...sortedIndices]
  });
};

/**
 * EN: Returns the last list of sorted indices from the trace.
 * RU: Возвращает последние отсортированные индексы из трейса.
 *
 * @param {Object[]} trace - EN: The trace array. RU: Массив шагов сортировки.
 * @returns {number[]} EN: Indices that are currently marked as sorted.
 *                      RU: Индексы, которые помечены как отсортированные.
 */

export const lastSorted = (trace) => {
  return trace[trace.length - 1].sortedIndices;
};

/**
 * EN: Swaps two elements in an array in-place.
 * RU: Меняет два элемента в массиве местами.
 *
 * @param {any[]} array - EN: The target array. RU: Целевой массив.
 * @param {number} i - EN: First index. RU: Первый индекс.
 * @param {number} j - EN: Second index. RU: Второй индекс.
 */

export const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

/**
 * EN: Creates a range of numbers [start, end).
 * RU: Создаёт массив чисел от start до end (не включая end).
 *
 * @param {number} start - EN: Start of range (inclusive). RU: Начало диапазона (включительно).
 * @param {number} end - EN: End of range (exclusive). RU: Конец диапазона (исключительно).
 * @returns {number[]} EN: Array of numbers in the given range.
 *                      RU: Массив чисел в заданном диапазоне.
 */

export const createRange = (start, end) => {
  return [...Array(end - start).keys()].map((elem) => elem + start);
};

/**
 * EN: Creates a key object for labeling visual trace groups.
 * RU: Создаёт объект с названиями групп для визуализации сортировки.
 *
 * @param {string} groupA - EN: Label for group A (e.g., comparison). RU: Название группы A (например, сравнение).
 * @param {string} groupB - EN: Label for group B (e.g., swap). RU: Название группы B (например, обмен).
 * @param {string} [groupC] - EN: Optional label for group C. RU: Необязательное название для группы C.
 * @param {string} [groupD] - EN: Optional label for group D. RU: Необязательное название для группы D.
 * @returns {Object} EN: Object with visual group labels.
 *                   RU: Объект с названиями визуальных групп.
 */

export const createKey = (groupA, groupB, groupC, groupD) => {
  return { groupA, groupB, groupC, groupD };
};
