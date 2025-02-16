"use client"
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import WorkerLayout from "@/app/components/WorkerLayout/WorkerLayout";
import {ElementType} from "@/app/types/exportPdfTypes";

const GoldenRules = () => {
  const sections=[{
    title:"Hello all",
    sections:[
    "If you want to succeed within our organization this handbook will show you how." +
    "There are 3 golden rules that if you break them could cause you to be terminated or prosecuted by the police so let’s go over them"]
  },
    {
      title:"Rule 1",
      sections:  [
        "Under no circumstance are you allowed to take anything that does not belong to you. We all know that this seems like common-sense, but many people hate this rule and intentionally and accidentally violate it so let us go over it. “anything” includes, items, money, information, time, emotion, and all things that can be transferred from someone else to yourself. “take” includes, removing anything from where it belongs to some place it does not belong. Just to make sure we are all on the same page lets go over a few examples:",

        "You arrive at a customer’s house; the customer comes out to greet you with some coffee and a few breakfast pastries. The customer says, “hay guys, thanks for coming out we are glad to see you, brought you some breakfast and coffee, let us know if there is anything else you need.” The customer then returns to their house. You eat the pastries and coffee while you prep the tools and paperwork for the project or save the food and coffee for later at lunch. Question did you violate the first rule? The answer is NO, the customer gave the coffee and pastries and you kept on working on the project while eating. So, there is no violation.",

        "Now let’s take the same situation but instead of eating while working you stop prep work for 15 minutes, log a 15-minute break in the logbook, and then drink coffee and eat the pastries. Did you violate the first rule? No again because although work stopped you logged it as work stopped and a brake.",

        "Now let’s take the same situation but instead you sit in the truck for 15 minutes while drinking the coffee and eating the pastries, then start the prep work. Did you violate the first rule? YES, because you did not log the stoppage of work. The time you are being paid does not include brakes or lunches and by failing to log the stoppage of work you are effectively lying to the company saying that you were working the entire time when in truth you were on brake. Most people see this as an accident or error of judgment but from the company’s point of view it is theft of time. Also 15 minutes (although) small adds up. let us say only one person “Forgets” to log 1 brake per day. If the person is paid $18.00 per hour and forgets to log one brake per day. In one week they will have been paid $22.50 of pay that they did not earn, in a month it will be $90.00, if the company lets it go for a year the cost to the company will be $1080.00 and that is for just, one person, who dishonestly logged brakes. Most people feel not accurately reporting time on brake or lunch is a victimless crime, but it effects the whole company and other workers significantly. why? Because the others are working while one person or one group of persons sit’s on brake while being paid. Also, as a result, one person or a small group is paid more causing projects to take longer and lowering the chance of the company making any money. If the company is not making money it will ether collapse or have to rase prices. Increasing costs to the customer makes it far more difficult to capture new customers thus causing less work to be available and if there is no work the company will collapse, and everyone loses.",

        "Let us consider another scenario. Its Friday morning and your project is almost finished, the boss calls you and asks you to spend an extra 2 hours working so that the project can be finished before the weekend. So, you work 10 hours instead of the standard 8 hours. Did you violate the rule? No because the boss requested that you spend the extra time. Now lest say it is Monday and you figure its going to take at lease 50 working hours to complete the project assigned to you, so you put in an extra 2 hours per day. By Thursday you are at 40 hours and ahead of schedule. You call the boss to ask when the final load of supplies will arrive, the boss says they are being delivered on Monday. So, you slow down your pace and only put in 6 hours on Friday leaving out early because you have run out of supplies. Did you violate the first rule?",

        "Yes, the agreement you have with the company states that you are only allowed to work 40 hours per week. Not 46 hours per week. This may seem like a trivial rule, but it is important to understand the scheduling of supplies and labor. Additionally, because you were ahead of schedule and had no supplies you had to slow down causing an unsteady work progress. These 2 things cause many difficulties for the company and other workers. First the company can not trust you to keep up with the scheduled work and subsequent delay between projects. Each project is timed so that the company can keep delays between projects to a minim allowing all persons to work steadily and step by step reach the top of there position and pay rate. Second when workers slow the pace of work ether out of necessity, exhaustion, fear, or spite the customer feels the change in pace, the same is true for putting in extra time each day. From the customers point of view the workers who are slowing down are “just trying to get more money out of them” while the workers who are logging more time each day are “rushing through the project and doing a poor quality job.” keeping a steady pace throughout the project, even if the project requires more or less time at the end, is part of the job. Not all projects will take exactly 40 hours some more some less but, If the company can trust that workers will work a relatively steady pace for each project then the company can be more accurate in scheduling work so that all persons can reach the 40 hours they need. If a steady pace is accomplished then, if requested or required, some workers may log more or less time all while keeping the customer happy.",

        "It is important to remember that when you are logging time for any project that has ether been assigned to you, or that you have requested, this time does not belong to you. You are trading your time to the company for payment and inaccurately reporting time, brakes, weather delays or any other stoppage can be seen as theft of time. Be honest and as accurate as possible and remember the company rewards good reporting and workmenship with extra pay usually at the end of the year.",

        "Now let us talk about theft of “emotion.” It may seem like there is not such a thing, but it exists and happens more often then known. So, let us look at a few examples. You come into work and find that a new very cute worker is assigned to your project, the boss instructs you to train the new person and as a result you become very friendly with them.",

        "A few months go by and you find that the 2 of you have started to have feelings for each other. After a few dates after work and a few drinks you sleep together and all seems well for the next few weeks but then you find out that the person has been re assigned to a new team and apparently is now interested in someone else. So, one day in passing to get their attention you lightly tap them on the butt, did you violate the first rule? This is a tricky situation however happens more often then most would like to admit. But the answer is most often yes, most people have a zone of emotion surrounding their body that you must have permission to access each time you access their body. Regardless of the status of your relationship with them. When you are logging time or on a company project you are not permitted to inappropriately touch any other person regardless of status of relationship. The company understands that at times it is necessary to tap a person on the shoulder or pull them out of harm’s way; however, when working breaching a persons zone of emotion can cause more than just a lawsuit, the other person can feel betrayed or intimidated into a dangerous work environment this not only could cause you to be terminated but in some situations police can be called on you for sexual assault especially if the person is under the age of consent."
      ]
    },
    {
      title:"Let us look at another situation",
      sections: [
        "You come into work and immediately your boss, whom you have had a relationship in the past with, calls you into the office and proceeds to tell you that you have received a reward that will be presented to you at the end of the day.",
        "When you return from the project the boss gathers everyone and awards you with a picture of yourself passed out in your underwear on their couch with a certificate reading worst drunk award,",
        "was the first rule violated?",
        "Although to some this may seem like a fun prank or joke it is a theft of emotion.",
        "How? Because the boss built you up making you think that you were going to be recognized and awarded, then they stole that emotion and replaced it with shame.",
        "This not only was cruel but also violates one of the code of ethics which we will go over later.",
        "Emotion is liquid and will change in strength, intensity, and value from day to day and person to person.",
        "Emotion can act like a fire sometimes warm and calm and other times raging and violent.",
        "All workers are expected to keep their words, actions, bodies, and emotions in check especially around customers and other workers."
      ]
    },
    {
      title:"Let us take the same situation and change it a bit",
      sections: [
        "The customer comes up to you at the end of the project and says, “hay guys thanks for a job well done then hands to you $150.00 and says split this with your team”. You take $100 for yourself and give $50.00 to the other 2 workers on the project.",
        "Did you violate the first rule? Yes, how? the customer said to split the tip with the team not that $100 was yours and $50 was for the other 2 people. Many people would say this is a gray area, but the truth is when the other workers find out they would be terribly upset and feel betrayed. not only could you be terminated over something like this but the other workers under most cases would refuse to work with you in the future. All personnel are expected to care for all money honestly and fairly in their possession especially if it does not belong to them."
      ]
    },
    {
      title:"Let us look at another situation",
      sections: ["Your car breaks down in the parking lot after work, your co-worker volunteers to drive you to an auto parts store to get a new battery, upon returning you ask the boss if you can use the company tools to install the battery, your boss agrees and you fix the car. Did you violate the first rule? \n" +
      "No, because you asked to use the tools and your co-worker volunteered their time to help you."]
    },
    {
      title:"Now let us say your car breaks down on the job site.",
      sections:[
        "You stop work and demand your co-worker take you in the company truck to the auto parts store to get a new battery.",
        "You fix the battery using the company’s tools and then proceed to finish the assigned project.",
        "Did you violate the first rule? Yes, how? Because you used the company truck, tools, and your co-worker's time without clearing it with the boss or co-worker.",
        "We all end up in difficult situations that we want fixed right away, but failing to get permission not only causes delays but also can be seen as a theft of items by the company, especially if an item breaks or someone is injured as a result."
      ],
    },
    {
      title: "One last situation:",
      sections:[
        "You come into work on Friday and the boss says, 'I need you to transport the tool trailer to the next site at the end of the day so it is ready for the crew on Monday.' So at the end of the day, you pick up the tool trailer and bring it to your house for the weekend to finish some work, then on Saturday evening, you bring the tools to the customer's house. Did you violate the first rule? Yes. You were instructed to take the tools to the customer's home in prep for Monday’s installation, but you took them to your house. Many people feel like in this situation, since nothing went wrong and the tools got there before the project started, there was no harm done. However, from the company's perspective, you not only used the tools without getting permission first, but you also put the tools at risk and possibly broke promises the company had made to the customer. If the customer was told by the company that the tools would arrive at the end of the day on Friday but instead they arrive on Saturday, it makes the customer assume that either the company is negligent and cannot keep their word, or that the company has abandoned them.",
      "Even small violations of the first rule can have a huge impact on the company and the customer. It is important to remember that violations will come back to you eventually. Theft takes on many forms and often looks like a simple mistake, so before you blunder into violating this rule, ask yourself a few questions.",
      "1. If the boss were standing right next to me, would they consider what I am doing theft or dishonest?\n2. Does this belong to the company, customer, or another worker?\n3. Could my participation in this be considered theft or dishonest in any way?. Would I want someone to do this to me?",
        "2.Does this belong to the company, customer, or another worker?",
        "3.Could my participation in this be considered theft or dishonest in any way?",
        "4.Would I want someone to do this to me?",
        "Do not fall victim to the dishonesty of other people; just because something is not locked down, misplaced, or unclaimed does not mean that you are allowed to take it into your possession. Err on the side of honesty, and the company will reward and promote you."]
    },
    {
      title:"Rule 2",
      sections: [
        "Quality and Quantity are symbionts, never try to separate them.",
        "What are symbionts? The best way to describe a symbiont is to think of conjoined twins.",
        "So, for now let’s call them twins.",
        "The twins are 2 completely different persons but one cannot live without the other nor do they always get along.",
        "If one fails so does the other. So it is the same with quality and quantity.",
        "Each person must perform to the expectations of both the customer and the company and although both need each other the two do not always have the same expectations on quality and quantity.",
        "We have all heard the saying “the customer is always right” however unless you're selling a car, this could not be further from the truth.",
        "Many times, the customer is wrong, that is where the quality comes in.",
        "I am sure you also have heard “it’s my way or the highway.” at times the company can be resistive regarding the quantity of time needed to complete a project.",
        "So, let’s talk about the twins with a few examples.",
        "You arrive at the customer's home at 9 am sharp and start working on prep work. Within a few minutes, the customer appears complaining that your truck is blocking her mailbox and that the last guy trampled her flowers. You tell the customer not to worry; you will be moving the truck by the end of the day. The customer returns to her home mad as a bee, and the next thing you know, the boss is calling you. What happened? Oops, you violated the rule without even knowing it. How? Each customer has expectations for how each project will proceed, both in time and in what they consider to be quality. The customer's idea of quality and your idea of quantity were out of balance. The twins must be kept in balance to prevent one from dying and thus killing the other"

      ],

    },
    {
      title:"Let's take the same situation but change a little bit",
      sections: [
        "You arrive at the customer's home at 9 am sharp and proceed to walk up to the front door and knock. The customer comes to the door and says you can’t have your truck there, to which you reply, I was just going to ask you about that, where would you like us to park today and do you have any special requests? The customer explains that the driveway is best for her, but you will have to wait till she moves her car and then explains that the last team she had trampled her flowers.",
        "You explain to her that the flowers are directly in the way of completing the assigned work and ask her if she would like you to transplant them, to which she replies, no we will be moving them tonight. Can you start on the back of the home? Sure, you reply, after the customer moves her car you proceed to start the prep work.",
        "So, what was different between the 2 examples? In the first example, you assumed that there was no need to check with the customer before starting your day. You assumed that your level of quality and your speed of quantity was ok and that it fit the customer. Where in the second example, you assumed that you needed to proactively reach out to the customer to make sure the twins were in balance before you start the day."
      ]
    },
    {
      title:"scenario 2",
      sections: [
        "You’re still working on the home, and about a day into the project you have started on the rear of the customer’s house and things are going well. As you’re loading up the tools, the customer comes out and asks if you will be cleaning up the yard as it appears there is still trash by the side of the home. You reply we would, but have to end at 5 and since we are almost out of time it will have to wait till tomorrow. The customer says ok but is clearly upset and starts cleaning up the yard herself.",
        "Let’s say the same thing happens but you tell the customer sure we are running a little late, but we always clean up at the end of the day. What happens then? The customer returns to her home knowing that your quality and her quality are in balance. Then you call the boss explaining to them that you ran late during the day and need to spend an extra hour to clean up the trash that is left over from the siding removal. The boss agrees and authorizes the added time.",
        "The twins also need to be in balance with you and the company as well. Let's say after you request the boss to authorize extra time the boss says no you have used more time than you had agreed to this week. What should you do? Remember the twins must stay in balance. Should you return to the customer and explain that the boss told you not to clean up? No, you should take a picture of the area that you have to clean up then send it to your boss, then clean up on your own time and send a picture to the boss when the site is cleaned up. Then the following morning explain that you had to clean up on your own time and request the boss compensate you for the time you spent cleaning. Resistance to working past the time allowed will happen from time to time with all companies. It often arises because of the workers failing to keep track of their time and the amount of production they have completed during the workday. Although sometimes the company’s expectations or time estimates are off and must be adjusted. Regardless of the scenario you are responsible for keeping the twins in balance even if you must dedicate some of your own time to complete this requirement. The company will always compensate you for the time you spent, but be aware that how you manage your time will affect your relationship with the company and customer. If time is not managed well, both the customer and company will lose confidence in you causing a complete breakdown of the twins (quality and quantity) and possibly the loss of your assignment or even termination.",
        "The best way to prevent this situation and keep the twins balanced is through the use of efficiency and repetition. These 2 brothers are also twins, but they are not bound together. They can be used to help the twins by properly moving the project forward at the same rate of speed each day, allowing you to effectively manage the progress of the project and keep the twins in balance.",
        "Efficiency means to do something in the easiest way possible, while quality is to do something in the best way possible. The 2 do not always get along, but both need each other if quantity is going to survive. Quantity craves the support of repetition but is bound to quality. If you mix Efficiency with Quality and then add the support of Repetition, you will receive a steady quantity of work accomplished each day. When all are working together, the customer, company, and the workers will be happy and at peace.",
        "So let's talk about how to accomplish this. First, always look for the most efficient way to complete a task while having the smallest negative impact on quality. For example, it is the end of the day and you need to clean up. What is the most efficient way to clean up? Start with the largest items that are furthest from the storage or trash location. Why? Because if you run out of time and must leave, only the smallest items are left on site, so your impact on quality is small. If you then practice repeating this clean-up process each day, you will get better and better at it. As a result, your quality will go up; additionally, its twin, quantity, will become faster. Your clean-up each day will, in time, become a fast-high-quality end to the day.",
        "If you start cleaning up items that are small first and run out of time, your impact on quality could be huge. You could miss a ladder in the rear of the home; let’s say the customer’s son comes home, sees a ladder, and tries to move it. While attempting to move the ladder, it falls on the customer and they are injured. Now the impact on quality may be beyond repair and cost you dearly. Not only would the customer be injured, but the company would hold you responsible for failing to clean up and safeguard the project. Also, if you took longer on the project because of a slow clean-up and were constantly calling the boss asking for more time to clean, the company would start to wonder if you were just going slow to try to get more time. This, although not true, may cause the company to refuse to assign more work to you.",
      "Don’t let the twins quality and quantity get out of balance; learn to use their siblings efficiency and repetition to guide them.",
      "    \"Before you start any task, ask these questions:\",\n" +
      "    \"1. Why am I doing it this way? Is it out of habit, laziness, or fear?\",\n" +
      "    \"2. Is there a more efficient way to do this?\",\n" +
      "    \"3. If I do the task this way, will it negatively impact quality or the customer?\",\n" +
      "    \"4. Am I doing it this way to maximize my hours?\",\n" +
      "\n" +
      "\"Practice using efficiency to keep quality as constant as possible and then replicate"
      ]
    },
    {
      title:"rule 3",
      sections: [
        "You may not know it, but these 3 characters are the biggest reason for accidents in any industry: people trying to be superheroes, clowns, or lizards. So let’s look at a few scenarios.",

        "You come into work feeling awesome; it is a Friday, and as soon as you get your check, you’re going to celebrate the weekend. You jump out of your truck and start grabbing ladders to finish the last bit of siding on the home. You got 2 in place, and normally you would get help with the big 40-foot ladder, but you have lifted it before, so you know you got this. You pick up the ladder and start to stand it up when, suddenly you feel it stuck on something. Looking up, you realize you forgot to check your overhead, and the ladder is stuck on a power line. Momentum takes over, and you lose control of the ladder; it drops back onto the truck, breaking one of the windows.",

        "So, what happened? Well let’s see. You forgot to check your overhead, the ladder was too big for you, you were in a hurry, you were trying to be a “superhero.” Superheroes are always the best, the strongest, the smartest, and the fastest, until they are not. In a work setting, there is no room for the lone leader who saves the day all by themselves. All work settings require a team, even when a person is working alone. If you find yourself working alone, there is even more reason not to be a superhero. You are not as strong as you think, nor as fast or as smart. Slow down, think through each task, look for the efficient and safe way to complete the task, then use repetition to increase speed. Superheroes are one-off’s; they allow their arrogance to create unsafe conditions and habits that lead to injuries, damage, and eventually death. If you have no option but to work alone, look for inventive items or processes that can help. For example, instead of lifting an entire 40-foot ladder on your own, you could have used a hand truck to help move it and a rope to lift it into place. Ask yourself, is there a safe and efficient way to complete this task without being a superhero?",

        "Let us look at another scenario. Your boss calls and tells you that there is a new worker coming in to put in a half day and that they will be arriving at your location in an hour. So, you prep a tool belt for them with a new hammer, prybar, tape measure, and utility knife. Then you think of the best prank ever: this guy is new, so there is nothing wrong with a little hazing of the new guy, right? You know that one of the tape measures has been broken for some time now; it always gets stuck near the 10-foot mark. It would be so funny to watch as they struggle to figure out why the tape measure won’t go past 10 feet. So, you switch out the new tape for the old broken one. When the worker arrives, you instruct them to put on the belt and help you measure the front wall. The worker takes out the broken tape and hooks it on one corner and starts to measure. You eagerly wait as the new worker walks closer and closer to the 10-foot mark. Sure enough, the tape stops right at 10 feet, and the new worker loses their grip on it. You start to laugh and then realize the new worker has cut their hand on the edge of the window as they attempted to brace themselves when the tape stopped.",

        "What happened? A clown happened. There is nothing wrong with joking around, but there is a time and place for it, and work is not the time or the place. Clowns are insecure and think that by goofing around, they will make people like them. They create a thought in their mind that says this will be awesome; everyone will laugh and look at me like I am the hero who saved them from the boredom of the day. Thinking, “after all, what’s the point of working if you can’t have fun?” They see themselves as the comic relief to a “way too serious” workplace. Clowns allow their desire to play and be recognized to overtake safety rules and good judgment, causing damage to property and to other workers. Remember, you are responsible for your actions and how they affect other people and property. Before you start joking, ask yourself, am I at work? Jokes are always required to be fun and tasteful. Jokes, regardless of location, should never be arrogant, violent, dangerous, or used for revenge. Do not get duped into being a clown; it could cost you your job and someone else their life.",

        "So, what does a lizard have to do with a working environment? Let us look at an example. You have been working with the same company for a while now. Thinking about it, you start to remember several people who are no longer with the company. Still in thought, you get out of the work truck, put your safety gear on, and start to work. Today seems like yesterday, you think, as you methodically move through the assigned work at a steady pace, but you feel kind of like you are in a daze. At lunch, one of the junior workers who was removing trash asks if you want them to keep cleaning up or if they should help with installation. Not being in the mood to talk, you say just help with install; we will clean when we clean. At about 4 pm, you’re just about to finish one of the last pieces of window trim when you notice it is broken; you feel frustrated by this inconvenience. The other workers are on the opposite side of the building, so you will have to climb down the ladder and cut a new piece on your own. Begrudgingly, you heavily climb down the ladder; as you step off the ladder, you feel a searing pain in your foot. You angrily scream out “ouch,” followed by several expletive words about the junior worker who was cleaning up before. Looking down at your foot, sure enough, you have stepped on a nail. In anger, you pull your hammer out of your tool belt and throw it; the hammer bounces off the ground and glances off the customer’s AC unit, leaving a dent. You reach down and pull the nail out of your foot, unbuckle, and drop your tool belt, then hobble to the work truck to nurse your wound.",

        "After so many years of experience, how did this happen? Well, like all lizards, you got bit. Sure, you could have told the junior worker to keep cleaning, and if the piece of trim had not broken, then you would not have had to climb down the ladder, but none of these things would have prevented you from stubbing your toe or tripping over your own feet. Lizards are not lazy, but they don’t like to work. They take a much more slothy approach to their life and work. They would much rather lay in the sun and do nothing than work. Lizards blame everyone for what happens to them and see cleaning and order as a whip on their back. When things go wrong, they are quick to act out in anger and point fingers. Their rage causes them to damage themselves and others. Once injured in any way, the lizard retreats to its hiding place and refuses to come out, sulking in depressed resentment at the world around them.",

        "Everyone becomes angry at times, and injury happens to all people at some point, but rage and violence after any injury, whether emotional, physical, or psychological, show a huge lizard personality that is a danger to itself and others. People who work because they have to are most prone to becoming lizardly. They hate that effort is required and that people do not just hand them an easy life. If something is hard, they will make the company, customer, and other workers pay for making them complete it. People like this are far more likely to injure themselves, damage property, and accidentally injure other people.",

        "Entitlement is often the root cause for a lizardly personality to develop; they think they deserve to be recognized and rewarded because of time spent working. They think they know best and that nothing should be able to touch them. Therefore, they act out in anger at correction and circumstances that alter the slothy life experience they have created or believe they deserve. Do not let this cold-blooded creature overtake you; remember, work happens to all people. Even the highest-paid person in the company has to work. Focus on efficiency and quality and allow repetition to save you from this creature. Violence will not be tolerated on any project; regardless of the cause, if a worker, through anger, damages or injures any other person or property, they will be terminated, and in some situations, a criminal complaint will be filed against them.",

        "These personalities are a danger to everyone and do not belong in any workplace. So, before you start any task, ask yourself these questions:",
        "1. Am I being a superhero today trying to prove my value?",
        "2. Is joking around right now okay since I am at work?",
        "3. Why is this job frustrating me?",
        "4. Do I fight against order or correction, and if so, why?",
        "Remember people are biggest cause cause of unsafe conditions." +
        "Remember, people are the biggest cause of unsafe conditions. You can have the best record regarding safety, and one spout of arrogance, one joke, or one fit of rage can destroy your life forever.",
        "Our company only has 3 golden rules do not violate them and you will excel.",
        "We sincerely hope this handbook has been a great help to you and hope that you share it with your fellow workers. If you need more examples to make any rule clearer, please reach out to management."
      ]
    }
  ]
  return (
    <WorkerLayout withSignature pdfName={"goldenRules"}
                  exportElems={sections.map(el=>({type:ElementType.SECTION,title:el.title,content:el.sections}))}
                  pdfTitle={"goldenRules"}>
      {sections.map((section,index)=><Box key={index}>
        <Typography variant={"h5"}>{section.title}</Typography>
        {section.sections.map((el,index)=><Typography key={index} sx={{mb:1}}>{el}</Typography>)}
      </Box>)}
    </WorkerLayout>
  );
};

export default GoldenRules;
