import * as S from './NoData.styles'

type NoDataProps = {
  content: string
  content2: string
}

export function NoData({ content, content2 }: NoDataProps) {
  return (
    <S.SectionNoData>
      <S.TextNoData>
        {content}
        <br />
        {content2}
      </S.TextNoData>
      <S.ImgNoData
        src="../../../src/assets/imgs/insert_data.png"
        alt="Imagem de insert de dados"
      />
    </S.SectionNoData>
  )
}
