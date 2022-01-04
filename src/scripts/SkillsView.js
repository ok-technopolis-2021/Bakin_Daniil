export default class SkillsView {
    skillsSection = document.querySelector('.skills-list');
    addForm = document.querySelector('#add-new-skill');

    getSkillName() {
        return document.querySelector("input[name=name]").value.trim();
    }

    getSkillValue() {
        return document.querySelector("input[name=value]").value.trim();
    }

    drawNewSkill(name, value, id) {
        const newSkill = document.createElement("div");
        newSkill.className = "skill skill_" + id

        newSkill.innerHTML =
            `<div class="skill_description">
                <p class="skill_name">${name}</p>
                <p class="skill_percentage">${value}</p>
            </div>
            <div class="skill_content">
                <div class="skill_bar">
                    <div class="skill_bar-value" style="width: ${value}%;"></div>
                </div>
                <button class="skill-button">x</button>
            </div>`

        this.skillsSection.appendChild(newSkill);
    }

    cutAwaySkillById(id) {
        const removeSkill = this.skillsSection.querySelector(".skill_" + id);
        removeSkill.remove();
    }

}