
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
    });
  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
    });

    // BOUNDARY VALUE TEST CASES (BVT)
    // Testing min-1, min, min+, nom, max-, max, max+1 for each
    // variable while holding others at nominal (100).

    // --- BVT: Variable a boundaries, b=100, c=100 ---

    // BVT: a = min-1 (below valid range)
    test('BVT: a=0 (below min), b=100, c=100 → Error', () => {
      expect(classifyTriangle(0, 100, 100)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // BVT: a = min (lower boundary)
    test('BVT: a=1 (min), b=100, c=100 → Isosceles', () => {
      expect(classifyTriangle(1, 100, 100)).toBe('Isosceles');
    });

    // BVT: a = min+ (just above lower boundary)
    test('BVT: a=2 (min+), b=100, c=100 → Isosceles', () => {
      expect(classifyTriangle(2, 100, 100)).toBe('Isosceles');
    });

    // BVT: a = nom (nominal value)
    test('BVT: a=100 (nom), b=100, c=100 → Equilateral', () => {
      expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');
    });

    // BVT: a = max- (just below upper boundary)
    test('BVT: a=199 (max-), b=100, c=100 → Isosceles', () => {
      expect(classifyTriangle(199, 100, 100)).toBe('Isosceles');
    });

    // BVT: a = max (upper boundary) — 200 >= 100+100, so Not a Triangle
    test('BVT: a=200 (max), b=100, c=100 → Not a Triangle', () => {
      expect(classifyTriangle(200, 100, 100)).toBe('Not a Triangle');
    });

    // BVT: a = max+1 (above valid range)
    test('BVT: a=201 (above max), b=100, c=100 → Error', () => {
      expect(classifyTriangle(201, 100, 100)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // --- BVT: Variable b boundaries, a=100, c=100 ---

    // BVT: b = min-1 (below valid range)
    test('BVT: a=100, b=0 (below min), c=100 → Error', () => {
      expect(classifyTriangle(100, 0, 100)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // BVT: b = min (lower boundary)
    test('BVT: a=100, b=1 (min), c=100 → Isosceles', () => {
      expect(classifyTriangle(100, 1, 100)).toBe('Isosceles');
    });

    // BVT: b = min+ (just above lower boundary)
    test('BVT: a=100, b=2 (min+), c=100 → Isosceles', () => {
      expect(classifyTriangle(100, 2, 100)).toBe('Isosceles');
    });

    // BVT: b = max- (just below upper boundary)
    test('BVT: a=100, b=199 (max-), c=100 → Isosceles', () => {
      expect(classifyTriangle(100, 199, 100)).toBe('Isosceles');
    });

    // BVT: b = max (upper boundary) — 200 >= 100+100, so Not a Triangle
    test('BVT: a=100, b=200 (max), c=100 → Not a Triangle', () => {
      expect(classifyTriangle(100, 200, 100)).toBe('Not a Triangle');
    });

    // BVT: b = max+1 (above valid range)
    test('BVT: a=100, b=201 (above max), c=100 → Error', () => {
      expect(classifyTriangle(100, 201, 100)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // --- BVT: Variable c boundaries, a=100, b=100 ---

    // BVT: c = min-1 (below valid range)
    test('BVT: a=100, b=100, c=0 (below min) → Error', () => {
      expect(classifyTriangle(100, 100, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // BVT: c = min (lower boundary)
    test('BVT: a=100, b=100, c=1 (min) → Isosceles', () => {
      expect(classifyTriangle(100, 100, 1)).toBe('Isosceles');
    });

    // BVT: c = min+ (just above lower boundary)
    test('BVT: a=100, b=100, c=2 (min+) → Isosceles', () => {
      expect(classifyTriangle(100, 100, 2)).toBe('Isosceles');
    });

    // BVT: c = max- (just below upper boundary)
    test('BVT: a=100, b=100, c=199 (max-) → Isosceles', () => {
      expect(classifyTriangle(100, 100, 199)).toBe('Isosceles');
    });

    // BVT: c = max (upper boundary) — 200 >= 100+100, so Not a Triangle
    test('BVT: a=100, b=100, c=200 (max) → Not a Triangle', () => {
      expect(classifyTriangle(100, 100, 200)).toBe('Not a Triangle');
    });

    // BVT: c = max+1 (above valid range)
    test('BVT: a=100, b=100, c=201 (above max) → Error', () => {
      expect(classifyTriangle(100, 100, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // ============================================================
    // WEAK NORMAL EQUIVALENCE CLASS TEST CASES (ECP)
    // One representative from each equivalence class of valid
    // and invalid input/output partitions.
    // ============================================================

    // ECP: Equilateral class — all three sides equal
    test('ECP: Equilateral triangle (50, 50, 50)', () => {
      expect(classifyTriangle(50, 50, 50)).toBe('Equilateral');
    });

    // ECP: Isosceles class — a == b, a != c
    test('ECP: Isosceles triangle a==b (50, 50, 30)', () => {
      expect(classifyTriangle(50, 50, 30)).toBe('Isosceles');
    });

    // ECP: Isosceles class — a == c, a != b
    test('ECP: Isosceles triangle a==c (50, 30, 50)', () => {
      expect(classifyTriangle(50, 30, 50)).toBe('Isosceles');
    });

    // ECP: Isosceles class — b == c, a != b
    test('ECP: Isosceles triangle b==c (30, 50, 50)', () => {
      expect(classifyTriangle(30, 50, 50)).toBe('Isosceles');
    });

    // ECP: Scalene class — all sides different, valid triangle
    test('ECP: Scalene triangle (3, 4, 5)', () => {
      expect(classifyTriangle(3, 4, 5)).toBe('Scalene');
    });

    // ECP: Scalene class — another representative with larger values
    test('ECP: Scalene triangle (100, 150, 199)', () => {
      expect(classifyTriangle(100, 150, 199)).toBe('Scalene');
    });

    // ECP: Not a Triangle class — violates triangle inequality
    test('ECP: Not a Triangle (1, 2, 10)', () => {
      expect(classifyTriangle(1, 2, 10)).toBe('Not a Triangle');
    });

    // ECP: Not a Triangle class — another representative
    test('ECP: Not a Triangle (5, 1, 1)', () => {
      expect(classifyTriangle(5, 1, 1)).toBe('Not a Triangle');
    });

    // ECP: Invalid input class — value below valid range
    test('ECP: Invalid input below range (-1, 50, 50) → Error', () => {
      expect(classifyTriangle(-1, 50, 50)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });

    // ECP: Invalid input class — value above valid range
    test('ECP: Invalid input above range (50, 50, 250) → Error', () => {
      expect(classifyTriangle(50, 50, 250)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });
});