# Order Summary Layout

## Container

```css
.order-summary {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 64px;
  width: min(870px, 100%);
  min-height: 804px;
  padding: 0;
}
```

## Title Section

```css
.order-summary__title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: min(500px, 100%);
  min-height: 116px;
}

.order-summary__title h1 {
  margin: 0;
  color: #1f2937;
  font: 600 48px/52px "DM Sans", sans-serif;
}

.order-summary__title p {
  margin: 0;
  color: #6b7280;
  font: 400 16px/24px "DM Sans", sans-serif;
  letter-spacing: -0.2px;
}
```

## Main Section

```css
.order-summary__section {
  width: 100%;
  min-height: 624px;
}

.order-summary__metadata {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 44px;
  min-height: 92px;
  padding: 24px 0;
  border-bottom: 1px solid #e5e7eb;
}

.order-summary__product-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  min-height: 120px;
  padding: 24px 0;
  border-bottom: 1px solid #f3f4f6;
}

.order-summary__calculations {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 0 28px;
  border-bottom: 1px solid #e5e7eb;
}

.order-summary__calculation,
.order-summary__total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.order-summary__calculation {
  min-height: 24px;
}

.order-summary__total {
  min-height: 84px;
  padding: 28px 0;
}
```

## Responsive Rules

```css
@media (max-width: 640px) {
  .order-summary { gap: 48px; }
  .order-summary__title h1 { font-size: 34px; line-height: 38px; }
  .order-summary__metadata,
  .order-summary__product-row { align-items: flex-start; }
  .order-summary__product-row { flex-direction: column; }
}
```
