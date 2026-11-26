const recommendations = {
  attract: {
    name: 'Attract',
    coach: 'Publish one post about a training week that rarely goes to plan. Invite people to use a one-page planner and count completed signups.',
    creator: 'Share a breakdown of three openings for a launch video. Offer a one-page video brief and count relevant brands that request it.',
    designer: 'Publish a clearly labeled sample packaging teardown. Offer a short design brief checklist and count founders who download it.',
  },
  engage: {
    name: 'Engage',
    coach: 'Send the planner with one question: “Which part of your week gets in the way most often?” Record the replies before drafting another email.',
    creator: 'Send a storyboard example and ask what the brand needs each video to help a viewer do. Track the useful replies.',
    designer: 'Ask checklist readers what a customer should notice first on their pack. Use the answers to choose the example for your next email.',
  },
  convert: {
    name: 'Convert',
    coach: 'Write a four-week starter package with the sessions, check-ins, and review date. Ask one prospect if the scope and next step are clear.',
    creator: 'State the video count, revisions, delivery date, and usage rights in one scope. End your next fit call by agreeing on a decision date.',
    designer: 'Quote one defined design project with revision limits, approved files, and a decision date. Review what happened after your last three quotes.',
  },
  ascend: {
    name: 'Ascend',
    coach: 'Schedule a short review to discuss what helped the client stay consistent. Agree on a next step that fits their needs.',
    creator: 'At handoff, ask how the creative was used and what the next launch needs. Request approval before showing any delivered footage in your portfolio.',
    designer: 'Review the finished design against the brief. Ask permission to show a before-and-after and use the approved example in your next post.',
  },
};

const diagnostic = document.querySelector('#flywheel-diagnostic');
const result = document.querySelector('#diagnostic-result');

diagnostic.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = new FormData(diagnostic);
  const recommendation = recommendations[input.get('stage')];
  const nextStep = recommendation?.[input.get('role')];
  if (!nextStep) return;

  const heading = document.createElement('strong');
  heading.textContent = `Start with ${recommendation.name}.`;
  const action = document.createElement('p');
  action.textContent = nextStep;
  result.hidden = false;
  result.replaceChildren(heading, action);
});
