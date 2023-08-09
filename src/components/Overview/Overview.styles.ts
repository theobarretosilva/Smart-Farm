import styled from 'styled-components'

export const Grid = styled.div`
  --min-column-width: min(439px, 100%);
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--min-column-width), 1fr)
  );
  gap: 20px;
  grid-template-rows: 325px;
`
