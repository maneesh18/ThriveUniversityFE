import React from "react";
import "./application_details.css";
import "../../styles.css";
import ApplicationBottom from "./ApplicationBottom";
const ApplicationDetails = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const continuePage = (e) => {
    console.log("Clicked the continue button");
    e.preventDefault();
    props.nextStep();
  };
  return (
    <div className="application-details">
      <div className="application-content-wrapper">
        <div className="heading-font wrapper-1">
          APPLICATION<div> GUIDELINES</div>
        </div>
        <div className="wrapper-2">
          <div>
            <div className="side-heading">
              Thrive University admission requirements
            </div>
            <div>You are guaranteed admission to Thrive University if you:</div>
          </div>
          <ul>
            <li>
              Have a cumulative unweighted high school GPA of 3.0 or higher
            </li>
            <li>Rank in the top 10% of your high school class </li>
            <li>Rank in the next 15% and have a minimum 1030 SAT or 20 ACT</li>
            <li>
              Rank in the 2nd quarter and have a minimum 1130 SAT or 23 ACT
            </li>
            <li>
              Rank in the 3rd quarter and have a minimum 1250 SAT or 26 ACT
            </li>
            <li>
              {" "}
              Are a registered participant in Thrive University's Eagle
              Advantage program
            </li>
          </ul>
          <div className="side-heading">Individual Review of Application</div>
          <div>
            Students who do not meet the published admission standards will be
            evaluated through an individual review process and may experience a
            longer wait time for an admission decision. If there is further
            documentation needed to render a decision you will be contacted.
          </div>
          <div>
            {" "}
            U.S. citizens or U.S. permanent residents applying for admission to
            UNT for the first time and who don't have any previous college
            credit should apply as freshmen.
          </div>
        </div>
      </div>
      <div className="application-div">
        <div className="side-heading">Application Priority Dates</div>
        <table id="application-table">
          <thead>
            <tr>
              <th scope="col">Apply by this priority date:</th>

              <th scope="col">To enroll for session:&nbsp;</th>

              <th scope="col">With classes beginning:</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <span class="tablesaw-cell-content">March 1, 2023*&nbsp;</span>
              </td>

              <td>
                <span class="tablesaw-cell-content">Fall 2023</span>
              </td>

              <td>
                <span class="tablesaw-cell-content">August 21, 2023</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="tablesaw-cell-content">May 12, 2023&nbsp;</span>
              </td>

              <td>
                <span class="tablesaw-cell-content">
                  Summer 2023: 3-week session
                </span>
              </td>

              <td>
                <span class="tablesaw-cell-content">May 15, 2023</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="tablesaw-cell-content">May 19, 2023</span>
              </td>

              <td>
                <span class="tablesaw-cell-content">
                  Summer 2023: first 5-week session, 10-week session
                </span>
              </td>

              <td>
                <span class="tablesaw-cell-content">May 22, 2023</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="tablesaw-cell-content">June 2, 2023</span>
              </td>

              <td>
                <span class="tablesaw-cell-content">
                  Summer 2023: 8-week session
                </span>
              </td>

              <td>
                <span class="tablesaw-cell-content">June 5, 2023</span>
              </td>
            </tr>

            <tr>
              <td>
                <span class="tablesaw-cell-content">June 23, 2023&nbsp;</span>
              </td>

              <td>
                <span class="tablesaw-cell-content">
                  Summer 2023: second 5-week session
                </span>
              </td>

              <td>
                <span class="tablesaw-cell-content">July 11, 2023</span>
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colspan="3">
                <span class="tablesaw-cell-content">
                  *You should apply and be admitted by March 1, 2023, to ensure
                  that all high school records and entrance exams are current
                  with Thrive University to be considered for the Thrive
                  University Excellence Scholarship Award. Applications will
                  continue to be accepted after the priority date.
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <ApplicationBottom nextStep={props.nextStep} prevStep={props.prevStep} onContinue={()=>{}} formData={props.formData} />
    </div>
  );
};

export default ApplicationDetails;
