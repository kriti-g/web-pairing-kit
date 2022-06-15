import Activity from './Activity';

export default function ActivityList({activities}) {
    return (<ul className='activity-list' >
    {activities.map(activity => {
      return (
        <li key={activity.id}>
          <Activity activity={activity}/>
        </li>
      )
    })}
    </ul>)
  }