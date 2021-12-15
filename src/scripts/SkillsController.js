export default class SkillsController {

    constructor(model, view) {
        this.skillsModel = model;
        this.skillsView = view;
        this.createFormDependency();
    }

    createFormDependency() {
        this.skillsView.addForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (this.skillsModel.skills.length >= 7) {
                alert("Not enough space for this skill");
                return;
            }
            this.addNewSkill();
            this.skillsView.addForm.reset();
        });
    }

    addNewSkill() {
        this.addNewSkillByValues(this.skillsView.getSkillName(), this.skillsView.getSkillValue());
    }

    addNewSkillByValues(name, value) {
        const skill = this.skillsModel.addSkill(name, value);
        this.skillsView.drawNewSkill(name, value, skill.id);

        let deleteButton = this.skillsView.skillsSection
                               .querySelector(".skill_" + skill.id)
                               .querySelector("button");

        deleteButton.addEventListener("click", () => {
            this.deleteSkill(skill);
        });
    }

    deleteSkill(skill) {
        this.skillsView.cutAwaySkillById(skill.id);
        this.skillsModel.deleteSkill(skill);
    }

    updateAllSkills() {
        //При желании можно еще написать обновление всех скиллов, если это надо
        //Как я делал ранее при добавлении или удалении
    }

}