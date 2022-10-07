import { Outlet } from 'react-router-dom'

type Props = {}

const WebLayout = (props: Props) => {
  return (
    <>
      <div>
        <main>
          <Outlet />
        </main>
      </div></>
  )
}

export default WebLayout