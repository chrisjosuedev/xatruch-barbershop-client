import { useReviewStore } from '../../../../hooks/useReviewStore'

export const ActionAdmin = ({ values }) => {
  const { reviewsToApprove, startApprovingReviews } = useReviewStore()

  const onApproveReviews = (id) => {
    startApprovingReviews(id)
  }

  return (
    <div className='p-2'>
      <input
        onChange={() => onApproveReviews(values)}
        type='checkbox'
        disabled={!reviewsToApprove.includes(values) && reviewsToApprove.length >= 5}
        checked={reviewsToApprove.includes(values)}
      />
    </div>
  )
}
