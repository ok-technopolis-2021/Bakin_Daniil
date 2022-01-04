import "./change_theme"
import SkillsController from "./SkillsController"
import SkillsModel from "./SkillsModel"
import SkillsView from "./SkillsView"


const controller = new SkillsController(new SkillsModel([]), new SkillsView());
//add skills from bd
controller.addNewSkillByValues("Eating pizza", "85");
controller.addNewSkillByValues("Do nothing", "76");
controller.addNewSkillByValues("Playing games", "42");
controller.addNewSkillByValues("Avoiding preparing for exams", "93");
