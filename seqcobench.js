var DATA = [
{"original_code": "def positive_count(nums):\n    from array import array\n    \n    n = len(nums)\n    n1 = 0\n    for x in nums:\n        if x > 0:\n            n1 += 1\n        else:\n          None\n    return round(n1/n,2)", "transformation": "transformation_for_while_loop", "transformed_code": "def positive_count(nums):\n    from array import array\n    n = len(nums)\n    n1 = 0\n    _x_i = 0\n    while _x_i < len(nums):\n        x = nums[_x_i]\n       \n        if x > 0:\n            n1 += 1\n        else:\n            None\n        _x_i += 1\n    return round(n1 / n, 2)", "label": 1, "groups": 439, "dataset": "mbpp"},
{"original_code": "def positive_count(nums):\n    from array import array\n    \n    n = len(nums)\n    n1 = 0\n    for x in nums:\n        if x > 0:\n            n1 += 1\n        else:\n          None\n    return round(n1/n,2)", "transformation": "transformation_operand_swap", "transformed_code": "def positive_count(nums):\n    from array import array\n    n = len(nums)\n    n1 = 0\n    for x in nums:\n       \n        if 0 < x:\n            n1 += 1\n        else:\n            None\n    return round(n1 / n, 2)", "label": 1, "groups": 439, "dataset": "mbpp"},
{"original_code": "def positive_count(nums):\n    from array import array\n    \n    n = len(nums)\n    n1 = 0\n    for x in nums:\n        if x > 0:\n            n1 += 1\n        else:\n          None\n    return round(n1/n,2)", "transformation": "transformation_rename_variable_cb", "transformed_code": "def positive_count(nums):\n    from array import array\n    n = len(nums)\n    n2 = 0\n    for x in nums:\n       \n        if x > 0:\n            n2 += 1\n        else:\n            None\n    return round(n2 / n, 2)", "label": 1, "groups": 439, "dataset": "mbpp"},
{"original_code": "def positive_count(nums):\n    from array import array\n    \n    n = len(nums)\n    n1 = 0\n    for x in nums:\n        if x > 0:\n            n1 += 1\n        else:\n          None\n    return round(n1/n,2)", "transformation": "transformation_rename_variable_naive", "transformed_code": "def positive_count(nums):\n    from array import array\n    n = len(nums)\n    VAR_0 = 0\n    for x in nums:\n       \n        if x > 0:\n            VAR_0 += 1\n        else:\n            None\n    return round(VAR_0 / n, 2)", "label": 1, "groups": 439, "dataset": "mbpp"},
{"original_code": "def positive_count(nums):\n    from array import array\n    \n    n = len(nums)\n    n1 = 0\n    for x in nums:\n        if x > 0:\n            n1 += 1\n        else:\n          None\n    return round(n1/n,2)", "transformation": "transformation_rename_variable_rn", "transformed_code": "def positive_count(e81w):\n    from array import array\n    n = len(e81w)\n    n1 = 0\n    for x in e81w:\n       \n        if x > 0:\n            n1 += 1\n        else:\n            None\n    return round(n1 / n, 2)", "label": 1, "groups": 439, "dataset": "mbpp"},
{"original_code": "def positive_count(nums):\n    from array import array\n    \n    n = len(nums)\n    n1 = 0\n    for x in nums:\n        if x > 0:\n            n1 += 1\n        else:\n          None\n    return round(n1/n,2)", "transformation": "transformation_add_sub_variable", "transformed_code": "def positive_count(nums):\n    from array import array\n    \n    n = len(nums)\n    n1 = 0\n    for x in nums:\n        if x > 0:\n            n1 -= 1\n        else:\n          None\n    return round(n1/n,2)", "label": 0, "groups": 439, "dataset": "mbpp"},
{"original_code": "def positive_count(nums):\n    from array import array\n    \n    n = len(nums)\n    n1 = 0\n    for x in nums:\n        if x > 0:\n            n1 += 1\n        else:\n          None\n    return round(n1/n,2)", "transformation": "transformation_div_mul_variable", "transformed_code": "def positive_count(nums):\n    from array import array\n    \n    n = len(nums)\n    n1 = 0\n    for x in nums:\n        if x > 0:\n            n1 += 1\n        else:\n          None\n    return round(n1*n,2)", "label": 0, "groups": 439, "dataset": "mbpp"},
{"original_code": "def positive_count(nums):\n    from array import array\n    \n    n = len(nums)\n    n1 = 0\n    for x in nums:\n        if x > 0:\n            n1 += 1\n        else:\n          None\n    return round(n1/n,2)", "transformation": "transformation_greater_lesser_variable", "transformed_code": "def positive_count(nums):\n    from array import array\n    \n    n = len(nums)\n    n1 = 0\n    for x in nums:\n        if x < 0:\n            n1 += 1\n        else:\n          None\n    return round(n1/n,2)", "label": 0, "groups": 439, "dataset": "mbpp"},
{"original_code": "def positive_count(nums):\n    from array import array\n    \n    n = len(nums)\n    n1 = 0\n    for x in nums:\n        if x > 0:\n            n1 += 1\n        else:\n          None\n    return round(n1/n,2)", "transformation": "transformation_dissimilar_code_injection_0", "transformed_code": "def min_cost(cost, m, n):\n\tR = 3\n\tC = 3\n\t \n\ttc = [[0 for x in range(C)] for x in range(R)] \n\ttc[0][0] = cost[0][0] \n\tfor i in range(1, m+1): \n\t\ttc[i][0] = tc[i-1][0] + cost[i][0] \n\tfor j in range(1, n+1): \n\t\ttc[0][j] = tc[0][j-1] + cost[0][j] \n\tfor i in range(1, m+1): \n\t\tfor j in range(1, n+1): \n\t\t\ttc[i][j] = min(tc[i-1][j-1], tc[i-1][j], tc[i][j-1]) + cost[i][j] \n\treturn tc[m][n]", "label": 0, "groups": 439, "dataset": "mbpp"},
{"original_code": "def positive_count(nums):\n    from array import array\n    \n    n = len(nums)\n    n1 = 0\n    for x in nums:\n        if x > 0:\n            n1 += 1\n        else:\n          None\n    return round(n1/n,2)", "transformation": "transformation_dissimilar_code_injection_1", "transformed_code": "def similar_elements(test_tup1, test_tup2):\n  \n  res = tuple(set(test_tup1) & set(test_tup2))\n  return (res) ", "label": 0, "groups": 439, "dataset": "mbpp"},
];
