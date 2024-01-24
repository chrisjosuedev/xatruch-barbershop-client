import { AppLayout } from '../../app/layout/AppLayout'

export const AuthLayout = ({ children }) => {
  return (
    <AppLayout isLanding={false}>
      <div className='container-fluid'>
        <div className='row header-container mt-4 p-4'>
          <div className='col-md-6 mt-4'>
            <h1>A tan solo pocos clicks..</h1>
            <p className='header-text'>
              {' '}
              Si tienes una cuenta, inicia sesión para agendar una cita. Si no tienes, puedes
              registrarte de manera gratuita para conectar con nosotros.{' '}
            </p>
          </div>
          <div className='col-md-6'>{children}</div>
        </div>
      </div>
    </AppLayout>
  )
}
