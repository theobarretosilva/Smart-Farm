import * as S from './Filter.styled'

type FilterProps = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export function Filter({ value, setValue }: FilterProps) {
  return (
    <S.DivFilter>
      <S.ButtonSearch type="submit">
        <img src="../../src/assets/imgs/filter/search.svg" alt="Pesquisa" />
      </S.ButtonSearch>
      <S.InputSearch
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="search"
        placeholder="Digite para filtrar os dados..."
      />
    </S.DivFilter>
  )
}
