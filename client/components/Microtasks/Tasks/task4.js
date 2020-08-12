import React from 'react'

const Dummy = () => {
  return (
    <div className="task-4">
      <div className="red">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      <div className="green">
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
      <div className="yellow">
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </div>
      <div className="blue">
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
