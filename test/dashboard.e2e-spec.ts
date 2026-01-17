import { test, expect } from '@playwright/test';

test('display daily orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.waitForTimeout(500)

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('+5% em relação a ontem')).toBeVisible()
})

test('display monthly orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.waitForTimeout(500)

  expect(page.getByText('32', { exact: true })).toBeVisible()
  expect(page.getByText('-15% em relação ao mês passado')).toBeVisible()
})

test('display monthly cancelled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.waitForTimeout(500)

  expect(page.getByText('6', { exact: true })).toBeVisible()
  expect(page.getByText('+25% em relação ao mês passado')).toBeVisible()
})

test('display monthly revenue amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.waitForTimeout(500)

  expect(page.getByText('R$ 893,19', { exact: true })).toBeVisible()
  expect(page.getByText('+83% em relação ao mês passado')).toBeVisible()
})
