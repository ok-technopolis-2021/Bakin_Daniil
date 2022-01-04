import Skill from "./Skill"

export default class SkillsModel {

    constructor(skills) {
        this.skills = skills;
        this.counter = 0;
    }

    addSkill(name, value) {
        const skill = new Skill(name, value, this.counter++);
        this.skills.push(skill);
        return skill;
    }

    deleteSkill(skill) {
        this.skills.splice(this.skills.indexOf(skill), 1);
    }

}
