import { graphql, useStaticQuery } from "gatsby"

const useGoogleCalendar = () => {
  const { allCalendar } = useStaticQuery(graphql`
    {
      allCalendar {
        nodes {
          childrenCalendarEvent {
            end {
              date
            }
            start {
              date
            }
            summary
            organizer {
              displayName
            }
          }
        }
      }
    }
  `);
  return allCalendar.nodes;
}
export default useGoogleCalendar;