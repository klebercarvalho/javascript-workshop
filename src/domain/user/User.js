class User {
  constructor ({ name, age }) {
    this.name = name
    this.age = age
  }

  validate () {
    const hasName = Boolean(this.name)
    const hasMinAge = this.age >= User.MIN_AGE

    const validation = {
      isValid: hasName && hasMinAge
    }

    if (!hasName) {
      validation.error = { name: 'Name is empty' }
    }

    if (!hasMinAge) {
      validation.error = validation.error || {}
      validation.error.age = 'Age is not the mnimum'
    }

    return validation
  }
}

User.MIN_AGE = 18

module.exports = User
