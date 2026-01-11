import { render } from "@testing-library/react"
import { Pagination } from "../pagination"
import UserEvent from "@testing-library/user-event"

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  it('should display the correct amount of pages and results', () => {
    const wrapper = render(
      <Pagination 
        pageIndex={0} 
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />
    )

    const pageText = wrapper.getByText('Página 1 de 20')
    const totalText = wrapper.getByText('Total de 200 item(s)')

    expect(pageText).toBeInTheDocument()
    expect(totalText).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const wrapper = render(
      <Pagination 
        pageIndex={0} 
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página'
    })

    const user = UserEvent.setup()

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })
})
